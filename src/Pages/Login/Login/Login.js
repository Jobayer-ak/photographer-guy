import { async } from "@firebase/util";
import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";
import "./Login.css";
import Loading from "../../../Shared/Loading/Loading";
// import { sendPasswordResetEmail } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  //  hooks
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation();

  // reset password
  const [sendPasswordResetEmail, sending, resetError] =
    useSendPasswordResetEmail(auth);

  let from = location.state?.from?.pathname || "/";

  let errorElement;

  // sign in with email and password
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  // showing loading
  if (loading || sending) {
    return <Loading></Loading>;
  }

  if (user) {
    navigate(from, { replace: true });
  }

  // set error message
  if (error || resetError) {
    errorElement = <p className="text-danger">Error: {error?.message}</p>;
  }

  // handling email and password to login with handle submit button
  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    signInWithEmailAndPassword(email, password);
  };

  // handling with reset password button
  const resetPassword = async () => {
    const email = emailRef.current.value;

    if (email) {
      await sendPasswordResetEmail(email);
      toast("Sent Email");
    } else {
      toast("Please Enter Your Email Address!");
    }
  };

  return (
    <div className="container text-center handle-login w-50">
      <h2 className="text-white text-center my-4">Please Login</h2>
      <Form onSubmit={handleSubmit} className="mx-auto">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            ref={emailRef}
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>

        <Button
          variant="secondary w-50 w-md-50 d-block mx-auto mb-3 "
          type="submit">
          Login
        </Button>
      </Form>
      {errorElement}
      <p className="text-white ">
        Don't Have Your Account?
        <Link to="/register" className="text-decoration-none ms-1">
          Please Register
        </Link>
      </p>
      <p className="text-white">
        Forget Password?{" "}
        <Link
          to="/login"
          className="text-primary text-decoration-none ms-1"
          onClick={resetPassword}>
          Reset Password
        </Link>
      </p>
      <SocialLogin></SocialLogin>
      <ToastContainer />
    </div>
  );
};

export default Login;
