import React from "react";
import MainNew from "../MainNew";
import SubNew from "../SubNew";
import { subNews, mainNew } from "../../mocks/news";
import { Container, Col, Row } from "react-bootstrap";
import "./styles.css";

const NewsView = () => {
  return (
    <section className="new-section">
      <Container fluid>
        <MainNew
          img={mainNew.img}
          paragraphs={mainNew.paragraphs}
          author={mainNew.author}
          date={mainNew.date}
          link={mainNew.readMoreUrl}
        />
        <Row>
          {subNews.map((subNew) => (
            <Col md={6} sm={12} className="subnew-col">
              <SubNew
                img={subNew.img}
                description={subNew.description}
                author={subNew.author}
                date={subNew.date}
                link={subNew.readMoreUrl}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default NewsView;
