import React from "react";
import aboutimg from "./aboutimg.jpg";
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

          <Col lg="8">
            <div
              style={{ background: "red", color: "white", fontSize: "30pt" }}
            >
              why isn't this in the column next to the cards i made ?{" "}
            </div>
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
`;
