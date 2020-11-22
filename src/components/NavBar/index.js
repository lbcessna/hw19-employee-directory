import React from "react";
import { Navbar } from "react-bootstrap";

export default function NavBar(props) {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand>Employees</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      </Navbar.Collapse>
    </Navbar>
  );
}
