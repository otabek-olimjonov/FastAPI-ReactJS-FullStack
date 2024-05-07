import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Container, Paper, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

import { authServices } from "@services/index";
import {
  setAuthenticated,
  setProfile,
  setRoles,
} from "@store/reducers/authReducer";
import { jwtDecode } from "jwt-decode";
import HelmetContainer from "@components/HelmetContainer";

import LoginForm from "./LoginForm";
import { useDispatch } from "react-redux";

const RootStyle = styled(HelmetContainer)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    display: "flex",
  },
}));

const ContentStyle = styled("div")(() => ({
  width: "100%",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

// username: 'asdasd', password: 'asdasd', remember: true}
export default function Login() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async (data) => {
    if (!data?.username) {
      alert("user name cannot be blank");
    } else if (!data?.password) {
      alert("password name cannot be blank");
    } else {
      setLoading(true);
      const { error: resError, data: resData } = await authServices.login(data);

      if (resError) {
      } else if (resData) {
        const { name, sub, scope } = jwtDecode(resData?.accessToken);
        dispatch(
          setProfile({
            name,
            id_admin: sub,
          })
        );
        console.log("scope", scope);
        localStorage.setItem("roles", scope);
        dispatch(setRoles(scope));
        localStorage.setItem(
          "profile",
          JSON.stringify({ name, id_admin: sub })
        );
        localStorage.setItem("token", resData?.accessToken);
        localStorage.setItem("refreshToken", resData?.refreshToken);
        localStorage.setItem("userId", data.username);
        if (navigator.userAgent) {
          localStorage.setItem("sessionID", resData?.sessionID);
        }
        // eslint-disable-next-line no-unused-expressions
        data?.remember
          ? localStorage.setItem("username", data.username)
          : localStorage.removeItem("username");

        dispatch(setAuthenticated(true));
        navigate("/");
      }
      setLoading(false);
    }
  };

  // const setAdminInfo = async () => {

  //   const userId = localStorage.getItem('userId');
  //   const { data } = await adminServices.getAdmin(userId);
  //   localStorage.setItem('isWarehouseMaster', data?.isWarehouseMaster);
  // };

  return (
    <RootStyle title="Login | App" content="Login page">
      <Container maxWidth="100%" sx={{ bgcolor: "#D3D3D3" }}>
        <ContentStyle>
          <Paper
            component={Stack}
            justifyContent="center"
            alignItems="center"
            sx={{ p: "40px", width: "365px", borderRadius: "20px" }}
          >
            <Typography
              sx={{
                color: "text.secondary",
                textAlign: "center",
                fontSize: 12,
                my: 2,
              }}
            >
              Login
            </Typography>
            <LoginForm handleLogin={handleLogin} loading={loading} />
          </Paper>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}
