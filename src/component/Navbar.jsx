import React from "react";
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const NavbarT = () => {
  const state = useSelector((state) => state.handleCart);
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand to="/" className="fw-bold fs-4">
          <Link className="nav-link" aria-current="page"to="/">
            T-MART
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link className="me-2" as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link className="me-2" as={Link} to="/products">
              Products
            </Nav.Link>
            <Nav.Link className="me-2" as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
             Contact
            </Nav.Link>
          </Nav>
          <Nav>
            <div className="buttons">
              <Link to="/login" className="btn btn-outline-dark">
                <i className="fa fa-sign-in me-1"></i>Login
              </Link>
              <Link to="/register" className="btn btn-outline-dark ms-2">
                <i className="fa fa-user-plus me-1"></i>Register
              </Link>
              <Link to="/cart" className="btn btn-outline-dark ms-2">
                <i className="fa fa-shopping-cart me-1"></i>Cart ({state.length}
                )
              </Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarT;
