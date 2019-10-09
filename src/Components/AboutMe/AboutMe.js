import React from "react";
import aboutimg from "./aboutimg.jpg";
import styled from "styled-components";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

export default function AboutMe() {
  return (
    <Background>
      <Container>
        <Row>
          <Col lg="7"></Col>
          <Col lg="5"></Col>
        </Row>
      </Container>
    </Background>
  );
}

const Background = styled.div`
  background-image: url(${aboutimg});
  min-height: 100vh;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: #f2eeef;
`;
