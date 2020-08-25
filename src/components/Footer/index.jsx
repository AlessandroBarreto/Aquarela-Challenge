import React from "react";
import "./styles.css";
import Navbar from 'react-bootstrap/Navbar'
import {footerData} from "../../mocks/footerData"

const Footer = () => {
  return (
      <Navbar sticked="bottom" className="footer">
        <Navbar.Text className="text">
          {footerData}
        </Navbar.Text>
      </Navbar>
  );
};

export default Footer;
