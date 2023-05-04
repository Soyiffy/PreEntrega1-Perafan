import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import CartWidget from './CartWidget';
import './components.css';

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg" className="navbar-custom">
      <Navbar.Brand href="#home" className="navbar-brand-custom">DopeStyle</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <NavDropdown title="Categorías" id="basic-nav-dropdown" className="nav-dropdown-custom">
            <NavDropdown.Item href="#remeras">Remeras</NavDropdown.Item>
            <NavDropdown.Item href="#buzos">Buzos</NavDropdown.Item>
            <NavDropdown.Item href="#zapatillas">Zapatillas</NavDropdown.Item>
            <NavDropdown.Item href="#pantalones">Pantalones</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#login" className="nav-link-custom">Login</Nav.Link>
          <Nav.Link href="#carrito" className="nav-link-custom">
            <CartWidget quantity={3} />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;