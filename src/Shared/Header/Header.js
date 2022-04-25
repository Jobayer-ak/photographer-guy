import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./Header.css";
import { Button } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";
import CustomLink from "../../Shared/CustomLink/CustomLink";

const Header = () => {
  // hooks
  const [user] = useAuthState(auth);

  // handle logout button
  const handleLogOut = () => {
    signOut(auth);
  };
  return (
    <>
      <Navbar variant="dark" expand="lg">
        <Container>
          <Navbar.Brand to="/" className="fs-2">
            Fotógrafa
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <CustomLink className="me-4 customLlink" to="/home#services">
                Services
              </CustomLink>
              <CustomLink className="me-4 customLink" to="/blog">
                Blog
              </CustomLink>
              <CustomLink className="me-4 customLink" to="/about">
                About
              </CustomLink>
              <CustomLink className="me-4 customLink" to="/contact">
                Contact
              </CustomLink>
              {user ? (
                <Button
                  onClick={handleLogOut}
                  variant="btn p-0 fs-5 btn-sm btn-link text-white text-decoration-none">
                  Sign Out
                </Button>
              ) : (
                <CustomLink className="customLink" to="/login">
                  Sign In
                </CustomLink>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
