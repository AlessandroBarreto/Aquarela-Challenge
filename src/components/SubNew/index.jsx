import React from "react";
import "./styles.css";
//import { Card, Button } from "react-bootstrap";
import subNew1 from "../../assets/subNew1.svg";

const SubNew = () => {
  return (
    <div className="flex-containerSN">
      <div className="flexSN-item">
        <img src={subNew1} alt="" />
        <p>A maturidade do time de analytics importa, e muito. Por que? Esta semana ficamos sabendo de um caso bastante triste de uma empresa de investimentos que apresentou de forma incoerente um enorme saldo negativo na conta de um usuário, levando-o ao suicídio. Referência 1...</p>
      </div>
      <div className="flexSN-item">2</div>
      <div className="flexSN-item">3</div>
      <div className="flexSN-item">4</div>
      <div className="flexSN-item">5</div>
      <div className="flexSN-item">6</div>
    </div>
  );
};

export default SubNew;
