/* eslint-disable no-underscore-dangle */
import axios from "axios";
import { env } from "@constants/index";

class RestService {
  constructor() {
    this.instance = axios.create();

    this.instance.interceptors.request.use((config) => {
      const token = localStorage.getItem("token");
      const sessionID = localStorage.getItem("sessionID");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
        if (navigator?.userAgent && sessionID) {
          config.headers.SessionID = sessionID;
        }
      }
      return config;
    });

    this.instance.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (process.env.NODE_ENV !== "production") {
          console.log("interceptors.response", error);
        }

        const originalRequest = error.config;
        if (error?.response?.data?.keyError === "SESSION_INVALID") {
          localStorage.removeItem("refreshToken");
          localStorage.removeItem("sessionID");
          localStorage.removeItem("token");
          window.location.reload();
          return false;
        }
        if (error.response.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true;

          try {
            const refreshToken = localStorage.getItem("refreshToken");
            localStorage.removeItem("token");
            const res = await this.instance.post(
              `${env.baseUrl}/auth/refresh-token`,
              { refreshToken }
            );

            if (res.status === 200) {
              const { accessToken, refreshToken: newRefreshToken } = res.data;
              localStorage.setItem("token", accessToken);
              localStorage.setItem("refreshToken", newRefreshToken);
            }

            return this.instance(originalRequest);
          } catch (_error) {
            localStorage.removeItem("refreshToken");
            window.location.reload();
            return Promise.reject(_error);
          }
        }
        // Xử lý kiểu phản hồi (response type)
        if (originalRequest.responseType === "blob") {
          if (error && error.response) {
            error.response.data = JSON.parse(await error.response.data.text());
          }
          return Promise.reject(error);
        }
        return Promise.reject(error);
      }
    );

    this.path = "";
    this.config = {
      baseURL: env.baseUrl,
      headers: {
        Authorization: "",
        "Content-Type": "application/json",
      },
    };
  }

  setPath(path) {
    this.path = path;
    return this;
  }

  setHeaders(options) {
    this.config.headers = { ...this.config.headers, ...options };
    return this;
  }

  setConfig(options) {
    this.config = { ...this.config, ...options };
    return this;
  }

  setResponseType(type) {
    this.config.responseType = type;
    return this;
  }

  setAuthHeader(token) {
    if (token) {
      this.config.headers.Authorization = `Bearer ${token}`;
    }
    return this;
  }

  get() {
    return this.instance.get(this.path, this.config);
  }

  post(data = {}) {
    return this.instance.post(this.path, data, this.config);
  }

  put(data = {}) {
    return this.instance.put(this.path, data, this.config);
  }

  delete() {
    return this.instance.delete(this.path, this.config);
  }

  patch(data = {}) {
    return this.instance.patch(this.path, data, this.config);
  }

  setSignal(controller) {
    this.config = { ...this.config, signal: controller.signal };
    return this;
  }
}
export default RestService;
