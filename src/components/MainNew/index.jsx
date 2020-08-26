import React from "react";
import "./styles.css";
import { Row, Col, Card } from "react-bootstrap";

const MainNew = (props) => {
  return (
    <Card className="mainnew-card">
      <Row noGutters={true}>
        <Col xs={12} lg={6}>
          <img src={props.img} alt="" className="mainnew-image" />
        </Col>
        <Col xs={12} lg={6}>
          <Card.Body className="mainnew-card-body">
            <p className="mainnew-author-span">
              por {props.author} | {props.date}
            </p>
            <div className="paragraphs-container">
              {props.paragraphs.map((paragraph) => (
                <Card.Text className="mainnew-card-text">{paragraph}</Card.Text>
              ))}
            </div>
            <div className="mainnew-read-more-container">
              <a
                href={props.link}
                target="blank"
                className="mainnew-card-button"
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

export default MainNew;
