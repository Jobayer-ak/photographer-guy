import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import "./Register.css";
import auth from "../../../firebase.init";

const Register = () => {
  //hooks

  // user create
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  // handle register submit
  const handleRegisterSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div className="container w-50">
      <h2 className="text-white text-center my-4">Please Register</h2>
      <Form onSubmit={handleRegisterSubmit}>
        <Form.Group className="mb-3">
          <Form.Control type="text" placeholder="Enter Your Name" required />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control type="email" placeholder="Enter email" required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control type="password" placeholder="Password" required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3 text-white">
          <Form.Check type="checkbox" label="Accept Terms and Conditions" />
        </Form.Group>
        <Button variant="secondary w-50 d-block mx-auto mb-2" type="submit">
          Register
        </Button>
      </Form>
      <p className="text-white">
        <Link to="/login" className="text-decoration-none">
          Already Have An Account?
        </Link>
      </p>
    </div>
  );
};

export default Register;
