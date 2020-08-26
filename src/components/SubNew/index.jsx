import React from "react";
import "./styles.css";
import { Row, Col, Card } from "react-bootstrap";

const SubNew = (props) => {
  return (
    <Card className="subNewsCard">
      <Row noGutters={true}>
        <Col xs={12} xl={6}>
          <img src={props.img} alt="" className="subNewImage" />
        </Col>
        <Col xs={12} xl={6}>
          <Card.Body>
            <Card.Text className="subnew-cardText">{props.description}</Card.Text>
            <div className="subnew-read-more-container">
              <span className="subnew-author-span">
                por {props.author} | {props.date}
              </span>
              <a href={props.link} className="subnew-newsCardButton">Ler mais</a>
            </div>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default SubNew;
