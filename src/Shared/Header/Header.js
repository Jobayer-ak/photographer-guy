import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./Header.css";
import { Button } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";
// import CustomLink from "../../Shared/CustomLink/CustomLink";
import { Link } from "react-router-dom";
// import scroll from "react-scroll";

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
          <Navbar.Brand className="fs-3" as={Link} to="/">
            Fotógrafa
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/home">
                Home
              </Nav.Link>
              <Nav.Link href="/home#services">Services</Nav.Link>
              <Nav.Link as={Link} to="/blog">
                Blog
              </Nav.Link>
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

      {/* <Navbar variant="dark" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand as={Link} to="/" className="fs-2">
            Fotógrafa
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <CustomLink className="me-4 customLlink" to="/">
                Home
              </CustomLink>

              <CustomLink
                className="me-4 customLlink"
                to="/home#services"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}>
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
      </Navbar> */}
    </>
  );
};

export default Header;

{
  /* <Navbar variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Fotógrafa</Navbar.Brand>
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
      </Navbar> */
}
