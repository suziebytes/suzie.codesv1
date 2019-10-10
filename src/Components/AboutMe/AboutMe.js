import React from "react";
import aboutimg from "./aboutimg.jpg";
import graphic from "./graphic.png";
import styled from "styled-components";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import CardAbout from "./CardAbout";
import TechSpecs from "./TechSpecs";

export default function AboutMe() {
  return (
    <Background>
      <Container>
        <Row>
          <Col lg="5">
            <Wrapper>
              <CardAbout />
              <TechSpecs />
            </Wrapper>
          </Col>
          <Col lg="7" style={{ justifyContent: "center", display: "flex" }}>
            <Svg></Svg>
          </Col>
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
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  flex-direction: column;
  align-items: center;
`;

const Svg = styled.div`
  display: flex;
  justify-content: center;
  background-position: center;
  background-image: url(${graphic});
  height: 100vh;
  width: 88%;
  background-size: contain;
  background-repeat: no-repeat;
`;
