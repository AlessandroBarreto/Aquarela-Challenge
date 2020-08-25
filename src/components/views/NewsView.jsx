import React from "react";
import MainNew from "../MainNew";
import SubNew from "../SubNew";
import { subNews } from "../../mocks/news";
import { Container, Col, Row } from "react-bootstrap";
import "./styles.css";

const NewsView = () => {
  return (
    <section className="newSection">
      <Container fluid>
        <MainNew />
        <Row>
          {subNews.map((subNew) => (
            <Col lg={6} sm={12} className="subNewCol">
              <SubNew img={subNew.img} description={subNew.description} />
            </Col> 
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default NewsView;
