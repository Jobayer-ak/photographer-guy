import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./Header.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";

const Header = () => {
  const [user] = useAuthState(auth);

  const handleLogOut = () => {
    signOut(auth);
  };
  return (
    <>
      <Navbar variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Fotógrafa
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/home#services">Services</Nav.Link>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">
                Contact
              </Nav.Link>
              {user ? (
                <Button
                  onClick={handleLogOut}
                  variant="btn btn-link text-white fs-5 text-decoration-none">
                  Sign Out
                </Button>
              ) : (
                <Nav.Link as={Link} to="/login">
                  Sign In
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
