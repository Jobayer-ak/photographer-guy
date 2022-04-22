import logo from "../../images/logo.png";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./Header.css";

const Header = () => {
  return (
    <>
      <Navbar variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            {" "}
            <span>Fotografa</span>
            <img height="50" src={logo} alt="Photographer Guy" />
          </Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link to="/home">Home</Nav.Link>
            <Nav.Link href="#features">Services</Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
            <Nav.Link href="#pricing">Contact</Nav.Link>
            <Nav.Link href="#pricing">Login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
