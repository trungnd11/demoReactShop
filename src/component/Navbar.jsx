import React from "react";
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const NavbarT = () => {
  const state = useSelector((state) => state.handleCart);
  const NavLinkStyle = ({ isActive }) =>
    isActive
      ? {
        color: '#277dfc'
      } : { color: '#545e6f' }

  return (
    <Navbar bg="light" expand="lg" className="shadow">
      <Container>
        <Navbar.Brand to="/" className="fw-bold fs-4">
          <NavLink className="nav-link" aria-current="page" to="/">
            T-MART
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link className="me-3 nar-hover-a" style={NavLinkStyle} as={NavLink} to="/">
              Home
            </Nav.Link>
            <Nav.Link className="me-3 nar-hover-a" style={NavLinkStyle} as={NavLink} to="/products">
              Products
            </Nav.Link>
            <Nav.Link className="me-3 nar-hover-a" style={NavLinkStyle} as={NavLink} to="/about">
              About
            </Nav.Link>
            <Nav.Link className="nar-hover-a" as={NavLink} style={NavLinkStyle} to="/contact">
              Contact
            </Nav.Link>
          </Nav>
          <Nav>
            <div className="buttons">
              <NavLink to="/login" className="btn btn-outline-dark">
                <i className="fa fa-sign-in me-1"></i>Login
              </NavLink>
              <NavLink to="/register" className="btn btn-outline-dark ms-2">
                <i className="fa fa-user-plus me-1"></i>Register
              </NavLink>
              <NavLink to="/cart" className="btn btn-outline-dark ms-2">
                <i className="fa fa-shopping-cart me-1"></i>Cart ({state.length}
                )
              </NavLink>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarT;
