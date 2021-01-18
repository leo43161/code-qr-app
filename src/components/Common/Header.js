import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar bg="light" variant="light" expand="lg">
        <Navbar.Brand href="#home">Qr_APP</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavLink
              className="nav-link"
              activeClassName="active"
              exact={true}
              to="/"
            >
              Inicio
            </NavLink>
            <NavLink
              className="nav-link"
              activeClassName="active"
              exact={true}
              to="/listaqr"
            >
              Lista de QRs
            </NavLink>
            <NavLink
              className="nav-link"
              activeClassName="active"
              exact={true}
              to="/addqr"
            >
              Agregar QR
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
