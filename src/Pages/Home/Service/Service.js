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
          <span>${price}</span>
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
    // <div className="text-white text-center service">
    //   <img src={imgURL} alt="" />
    //   <h4 className="mt-3">{name}</h4>
    //   <p>
    //     <span>${price}</span>
    //   </p>
    //   <p className="lead">{description}</p>
    //   <button
    //     onClick={() => navigateToServiceDetail(id)}
    //     className="btn btn-secondary w-100">
    //     Booking
    //   </button>
    // </div>
  );
};

export default Service;
