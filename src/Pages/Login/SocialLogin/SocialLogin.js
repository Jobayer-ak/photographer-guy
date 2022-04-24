import React from "react";
import "./SocialLogin.css";
import google from "../../../images/social/google.png";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useNavigate } from "react-router-dom";
import Loading from "../../../Shared/Loading/Loading";

const SocialLogin = () => {
  // hooks
  const navigate = useNavigate();

  let errorElement;

  // google signin
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  // showing loading spinner
  if (loading) {
    return <Loading></Loading>;
  }

  // set error
  if (error) {
    errorElement = <p className="text-danger">Error: {error?.message}</p>;
  }

  if (user) {
    console.log(user);
    navigate("/home");
  }

  return (
    <div>
      <div className="d-flex align-items-center">
        <div style={{ height: "1px" }} className="bg-light w-50"></div>
        <p className="text-white mt-2 px-3">Or</p>
        <div style={{ height: "1px" }} className="bg-light w-50"></div>
      </div>
      <div>
        <button
          onClick={() => signInWithGoogle()}
          className="btn btn-info w-50 d-block mx-auto my-2">
          <img
            style={{ width: "40px" }}
            className="img-fluid"
            src={google}
            alt=""
          />
          <span className="px-2">Google Sign In</span>
        </button>
      </div>
      {errorElement}
    </div>
  );
};

export default SocialLogin;
