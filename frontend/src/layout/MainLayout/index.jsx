/* eslint-disable react/button-has-type */
/* eslint-disable no-nested-ternary */
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Box, Typography, Button } from "@mui/material";
import { setAuthenticated } from "@store/reducers/authReducer";
import authServices from "@services/auth";

// [IMPORVE] reponsive and props
function MainLayout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await authServices.logout();

    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("isWarehouseMaster");
    dispatch(setAuthenticated(false));
    navigate("/login");
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 3,
      }}
    >
      <Typography>You are now in Protected Route. Congrats!!!</Typography>
      <Button onClick={handleLogout}>Logout </Button>
    </Box>
  );
}

export default MainLayout;
