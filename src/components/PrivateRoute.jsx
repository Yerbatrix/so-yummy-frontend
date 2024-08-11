import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Layout from "./Layout";

const PrivateRoute = ({ children }) => {
  const { isAuthenticated, loading } = useSelector((state) => state.auth);

  if (loading) {
    return <div>Loading...</div>; // Możesz dodać tutaj bardziej zaawansowany loader
  }

  return isAuthenticated ? (
    <Layout>{children}</Layout>
  ) : (
    <Navigate to="/signin" />
  );
};

export default PrivateRoute;
