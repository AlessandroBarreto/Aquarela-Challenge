import React from "react";
import "./styles.css";
import Navbar from 'react-bootstrap/Navbar'

const Footer = () => {
  return (
      <Navbar sticked="bottom" className="footer">
        <Navbar.Text className="text" style={{color: "#FFFFFF"}} >
          Copyright © 2020 Aquarela Inovação Tecnológica do Brasil S.A. - all rights reserved
        </Navbar.Text>
      </Navbar>
  );
};

export default Footer;
