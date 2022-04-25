import React from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Service.css";

const Service = ({ service }) => {
  // hooks
  const navigate = useNavigate();

  // props destructuring
  const { id, name, imgURL, description, price } = service;

  // handle navigateToServiceDetail button
  const navigateToServiceDetail = (id) => {
    navigate(`/service/${id}`);
  };

  return (
    <Card>
      <Card.Img variant="top" src={imgURL} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <p>
          <span className="fs-4">${price}</span>
        </p>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <button
          onClick={() => navigateToServiceDetail(id)}
          className="btn btn-secondary w-100">
          Booking
        </button>
      </Card.Footer>
    </Card>
  );
};

export default Service;
