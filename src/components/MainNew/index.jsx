import React from 'react';
import "./styles.css"
import { Row, Col, Card } from "react-bootstrap";

const MainNew = (props) => {
  return ( 
        <Card className="newsCard">
          <Row noGutters={true}>
            <Col xs={6}>
              <img src={props.img} alt="" className="subNewImage" />
            </Col>
            <Col xs={6}>
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


export default MainNew;