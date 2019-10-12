import React from "react";
import styled from "styled-components";
import servicesimg from "./servicesimg.png";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Design from "./Design";
import Develop from "./Develop";

export default function Services() {
  return (
    <Background>
      <Container>
        <Row>
          <Col lg="4" className="px-0 mx-0">
            <Design />
          </Col>
          <Col lg="4" className="px-0 mx-0">
            <img src="suzbg.png" />
          </Col>
          <Col lg="4" className="px-0 mx-0">
            <Develop />
          </Col>
        </Row>
      </Container>
    </Background>
  );
}

const Background = styled.div`
  display: flex;
  align-items: center;
  background-image: url(${servicesimg});
  min-height: 100vh;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
`;
