import React from "react";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="container">
      <h2 className="text-white text-center my-4">Contact</h2>
      <Form className="w-50 mx-auto my-3">
        <Form.Group className="mb-3">
          <Form.Control type="text" placeholder="Your Name" required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control type="email" placeholder="Your email" required />
        </Form.Group>
        <FloatingLabel label="Write Your Message......" className="mb-3">
          <Form.Control
            style={{ height: "200px" }}
            as="textarea"
            placeholder="Write your message"
            required
          />
        </FloatingLabel>

        <Button variant="secondary w-50 d-block mx-auto" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Contact;
