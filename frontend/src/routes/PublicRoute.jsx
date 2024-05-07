import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const PublicRoute = () => {
  const isLoggedIn = useSelector((state) => state.auth.authenticated);
  const isAuthenticated = isLoggedIn || localStorage.getItem('token');

  return isAuthenticated ? <Navigate to="/" /> : <Outlet />;
};

export default PublicRoute;
