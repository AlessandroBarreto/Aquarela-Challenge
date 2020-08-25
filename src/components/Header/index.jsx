import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../../assets/logo.svg";
import "./styles.css";

const Header = () => {
  return (
    <Navbar className="navbar" fixed="top">
      <Navbar.Brand className="navbar-brand">
        <img
          alt=""
          src={logo}
          className="navbar-logo d-inline-block align-top"
        />
        <div className="div-bar" />
      </Navbar.Brand>

      <Nav
        className="mr-auto"
        style={{
          height: "100%",
        }}
      >
        <Nav.Link
          active={true}
          href="https://www.aquare.la/blog/"
          target="blank"
          className="nav-link"
        >
          News
        </Nav.Link>
      </Nav>

      <Navbar.Text className="navbar-text">Welcome, Alessandro</Navbar.Text>
    </Navbar>
  );
};

export default Header;
