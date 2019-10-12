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
          <Col lg="4">
            <Design />
          </Col>
          <Col lg="4">something in here</Col>
          <Col lg="4">
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
  height: 100vh;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
`;
