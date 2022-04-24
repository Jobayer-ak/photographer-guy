import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";
import "./Login.css";
import Loading from "../../../Shared/Loading/Loading";

const Login = () => {
  //  hooks
  const emailRef = useRef("");
  const passwordRef = useRef("");

  let errorElement;

  const navigate = useNavigate();

  // sign in with email and password
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  // showing loading
  if (loading) {
    return <Loading></Loading>;
  }
  // set error message
  if (error) {
    errorElement = <p className="text-danger">Error: {error?.message}</p>;
  }

  // handling email and password to login with handle submit button
  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    signInWithEmailAndPassword(email, password);
  };

  return (
    <div className="container w-50 mx-auto">
      <h2 className="text-white text-center my-4">Please Login</h2>
      <Form onSubmit={handleSubmit}>
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

        <Button variant="secondary w-50 d-block mx-auto mb-2" type="submit">
          Login
        </Button>
      </Form>
      {errorElement}
      <p className="text-white">
        Don't Have Your Account?
        <Link to="/register" className="text-decoration-none ms-1">
          Please Register
        </Link>
      </p>
      <p className="text-white">
        Forgot Password?
        <Link to="/login" className="text-decoration-none ms-1">
          Reset Password
        </Link>
      </p>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;
