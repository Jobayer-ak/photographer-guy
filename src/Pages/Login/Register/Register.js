import React, { useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../../../Shared/Loading/Loading";
import "./Register.css";

const Register = () => {
  // hooks
  const [agree, setAgree] = useState(false);

  const emailRef = useRef("");
  const passwordRef = useRef("");

  let errorElement;

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  // showing loading spinner
  if (loading) {
    return <Loading></Loading>;
  }
  // set error message
  if (error) {
    errorElement = <p className="text-danger">Error: {error?.message}</p>;
  }

  // handle register submit
  const handleRegister = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    createUserWithEmailAndPassword(email, password);
  };
  return (
    <div className="container w-50">
      <h2 className="text-white text-center my-4">Please Register</h2>
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3">
          <Form.Control type="text" placeholder="Enter Your Name" required />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            ref={emailRef}
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3 text-white">
          <Form.Check
            onClick={() => setAgree(!agree)}
            type="checkbox"
            label="Accept Terms and Conditions"
          />
        </Form.Group>
        <Button
          variant="secondary w-50 d-block mx-auto mb-2"
          type="submit"
          disabled={!agree}>
          Register
        </Button>
      </Form>
      {errorElement}
      <p className="text-white">
        <Link to="/login" className="text-decoration-none">
          Already Have An Account?
        </Link>
      </p>
    </div>
  );
};

export default Register;
