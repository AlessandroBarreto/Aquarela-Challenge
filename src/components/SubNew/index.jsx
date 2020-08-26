import React from "react";
import "./styles.css";
import { Row, Col, Card } from "react-bootstrap";

const SubNew = (props) => {
  return (
    <Card className="subnew-card">
      <Row noGutters={true}>
        <Col xs={12} xl={6}>
          <img src={props.img} alt="" className="subnew-image" />
        </Col>
        <Col xs={12} xl={6}>
          <Card.Body>
            <Card.Text className="subnew-card-text">
              {props.description}
            </Card.Text>
            <div className="subnew-read-more-container">
              <span className="subnew-author-span">
                por {props.author} | {props.date}
              </span>
              <a
                href={props.link}
                target="blank"
                className="subnew-card-button"
              >
                Ler mais
              </a>
            </div>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default SubNew;
