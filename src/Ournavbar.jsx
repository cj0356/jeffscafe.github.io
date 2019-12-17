import React, { Component } from "react";
import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

class Ournavbar extends Component {

  render() {
    return (<Navbar bg="light" expand="lg">
  <Navbar.Brand href="home">Jeff's Cafe</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/menu">Menu</Nav.Link>
      <Nav.Link href="/about">About</Nav.Link>
      <Nav.Link href="/help">Help</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
);
  }
}

export default Ournavbar;
