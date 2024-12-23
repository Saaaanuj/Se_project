// components/PrivateRoute.js
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

// Example of an authentication function that checks if the user is logged in
const isAuthenticated = () => {

  if(localStorage.getItem('role') !== 'superadmin')return false;
  return true
};

function PrivateRouteS({ children }) {
  let location = useLocation();

  if (!isAuthenticated()) {
    // Redirect them to the login page if not authenticated
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
}

export default PrivateRouteS;
