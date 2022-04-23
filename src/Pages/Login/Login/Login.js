import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";
import "./Login.css";

const Login = () => {
  return (
    <div className="container w-50 mx-auto">
      <h2 className="text-white text-center my-4">Please Login</h2>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Enter email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Password" required />
        </Form.Group>

        <Button variant="secondary w-50 d-block mx-auto mb-2" type="submit">
          Login
        </Button>
      </Form>
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
