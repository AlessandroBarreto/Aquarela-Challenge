import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../../assets/logo.svg";
import "./styles.css";

const Header = () => {
  return (
    <Navbar
      style={{
        background:
          "linear-gradient(90deg, #F15A22 0%, #E5A923 26.56%, #E2E41A 50%, #87C879 72.92%, #4EB2C5 100%)",
        height: "56px",
        padding: "0",
        paddingLeft: "24px",
        paddingRight: "32px",
      }}
      fixed="top"
    >
      <Navbar.Brand style={{ display: "flex" }}>
        <img
          alt=""
          src={logo}
          width="32"
          height="32"
          className="d-inline-block align-top"
          style={{
            marginRight: "32px",
          }}
        />
        <div
          style={{
            border: "1px solid #fff",
          }}
        />
      </Navbar.Brand>

      <Nav
        className="mr-auto"
        style={{
          height: "100%",
        }}
      >
        <Nav.Link
          active={true}
          href="#!"
          style={{
            display: "flex",
            alignItems: "center",
            fontFamily: "Roboto",
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "16px",
            lineHeight: "19px",
            textAlign: "right",
            color: "#FFFFFF",
          }}
        >
          News
        </Nav.Link>
      </Nav>

      <Navbar.Text
        style={{
          fontFamily: "Roboto",
          fontStyle: "normal",
          fontWeight: "normal",
          fontSize: "14px",
          lineHeight: "16px",
          textAlign: "right",
          color: "#FFFFFF",
        }}
      >
        Welcome, Alessandro
      </Navbar.Text>
    </Navbar>
  );
};

export default Header;
