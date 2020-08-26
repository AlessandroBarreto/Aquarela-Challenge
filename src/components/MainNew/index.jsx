import React from 'react';
import "./styles.css"
import { Row, Col, Card } from "react-bootstrap";

const MainNew = (props) => {
  return ( 
    <Card className="main-newsCard">
      <Row noGutters={true}>
        <Col xs={12} lg={6}>
          <img src={props.img} alt="" className="mainNewImage" />
        </Col>
        <Col xs={12} lg={6}>
          <Card.Body className="mainNewCardBody">
              <p className="mainnew-author-span">
                por {props.author} | {props.date}
              </p>
            <div className="paragraphsContainer">
            {props.paragraphs.map((paragraph) => (
              <Card.Text className="mainNewCardText">{paragraph}</Card.Text>
            ))}
            </div>
            <div className="mainnew-read-more-container">
              <a href={props.link} target="blank" className="mainnew-newsCardButton">Ler mais</a>
            </div>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  )
}

export default MainNew;