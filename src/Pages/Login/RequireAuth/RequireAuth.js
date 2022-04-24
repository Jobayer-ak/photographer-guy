import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../../../Shared/Loading/Loading";

const RequireAuth = ({ children }) => {
  // hooks
  const [user, loading, error] = useAuthState(auth);
  const location = useLocation();

  // showing loading spinner
  if (loading) {
    return <Loading></Loading>;
  }

  if (error) {
    console.log(error.message);
  }

  // checking whether user logged in or not
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }

  return children;
};

export default RequireAuth;
