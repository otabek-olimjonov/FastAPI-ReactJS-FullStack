import RestService from "./RestService";

const authServices = {
  async login(data) {
    try {
      const res = await new RestService().setPath("auth/login").post(data);
      return { data: res?.data, error: null };
    } catch (err) {
      return { error: err?.response?.data || err, data: null };
    }
  },
  async logout() {
    try {
      const res = await new RestService().setPath("auth/logout").post();
      return { data: res?.data, error: null };
    } catch (err) {
      return { error: err?.response?.data || err, data: null };
    }
  },
};

export default authServices;
