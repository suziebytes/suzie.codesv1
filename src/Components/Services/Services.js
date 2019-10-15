import React from "react";
import styled from "styled-components";
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
          <Col lg="4" className="px-0 mx-0" style={{ zIndex: "5" }}>
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

// const Image = styled.div`
//   background-image: url(${suzbg});
//   width: 700px;
//   height: 700px;
//   margin: -172px;
//   background-size: contain;
//   background-repeat: no-repeat;
//   position: absolute;
// `;

const Image = styled.div`
  background-image: url(${suzbg});
  background-size: cover;
  width: 300px;
  height: 300px;
  background-repeat: no-repeat;
  @media (min-width: 441px) {
    transform: scale(2.3);
  }
  @media (max-width: 440px) {
    transform: scale(1.2);
  }
`;

const Container = styled.div`
  padding: 3% 10% 3% 10%;
`;
