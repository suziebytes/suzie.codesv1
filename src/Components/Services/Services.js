import React from "react";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Design from "./Design";
import Develop from "./Develop";
import bg from "./bg.png";
import suzbg from "./suzbg.png";

export default function Services() {
  return (
    <Background>
      <Container>
        <Row>
          <Col lg="4" className="px-0 mx-0">
            <Design />
          </Col>
          <Col lg="4" className="px-0 mx-0">
            <Image />
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
  background-image: url(${bg});
  min-height: 100vh;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
`;

const Image = styled.div`
  background-image: url(${suzbg});
  width: 100%;
  height: 100%;
  background-size: contain;
  background-repeat: no-repeat;
`;
