import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import logo from "../FigmaResources/icon.png";
import SocialIcons from "../FigmaResources/social-icons.png";
import divider from "../FigmaResources/navbar-divider.png";

const NavBar = () => {
  return (
    <Navbar expand="xl" className="navBar">
      <Navbar.Brand href="#home">
        <img className="navBarLogo" src={logo} alt="Logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav" className="rightSide">
        <Nav className="ms-auto">
          <Navbar.Brand>
            <img src={SocialIcons} alt="SocialIcons" />
          </Navbar.Brand>
          <Navbar.Brand>
            <img src={divider} alt="Divider" />
          </Navbar.Brand>
          <NavDropdown title="Log In" id="basic-nav-dropdown">
            <NavDropdown.Item href="#Register">Register</NavDropdown.Item>
            <NavDropdown.Item href="#Login">Log In</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav className="ms-auto">
          <Nav.Link href="#home" className="homeNavLink">
            Home
          </Nav.Link>
          <Nav.Link href="#portfolio">Our Portfolio</Nav.Link>
          <Nav.Link href="#suppliers">Suppliers</Nav.Link>
          <Nav.Link href="#careers">Careers</Nav.Link>
          <Nav.Link href="#ourcauses">Our Causes</Nav.Link>
          <Nav.Link href="#news">News</Nav.Link>
          <Nav.Link href="#aboutus">About Us</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
