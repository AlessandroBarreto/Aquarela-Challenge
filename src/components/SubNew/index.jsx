import React from "react";
import "./styles.css";
import { Row, Col, Button, Card } from "react-bootstrap";


const SubNew = (props) => {
  return (
    <Card className="newsCard">
      <Row noGutters={true}>
        <Col sm={6}>
          <img src={props.img} className="subNewImage" />
        </Col>
        <Col sm={6}>
          <Card.Body>
            <Card.Text className="cardText">
              {props.description}
            </Card.Text>
            <button className="newsCardButton">
              Ler mais
            </button>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default SubNew;
