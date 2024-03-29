import React from "react";
import mainimg from "./main.jpg";
import styled from "styled-components";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

export default function Landing() {
  return (
    <Background>
      <ContactButton href="#contact">Let's Talk</ContactButton>
      <Container>
        <Row>
          <Col lg="7"></Col>
          <Col lg="5">
            <Wrapper>
              <Welcome>
                Hi,<br></br> I'm Suzie.
              </Welcome>
              <Tag>i make, break & fix things.</Tag>
              <Button href="#about">Learn More</Button>
            </Wrapper>
          </Col>
        </Row>
      </Container>
    </Background>
  );
}

const Background = styled.div`
  background-image: url(${mainimg});
  background-color: #f2eeef;
  min-height: 100vh;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  justify-content: left;
  background-color: #f2eeef;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
`;

const Welcome = styled.h1`
  font-size: 45pt !important;
  color: #707070;
  font-weight: 200;
  margin-bottom: 0 !important;
`;

const Tag = styled.span`
  font-size: 10.5pt !important;
  color: #707070;
  letter-spacing: 2px;
  font-weight: 200;
  padding: 0 0 25px 0;
`;

const Button = styled.a`
  font-size: 11pt;
  text-align: center;
  color: #707070;
  padding: 5px 0 5px 0;
  border: 1px solid #fcc8c8;
  background: rgba(255, 255, 255, 0.6);
  width: 150px;
  display: inline-block;
  text-decoration: none !important;
  vertical-align: middle;
  transform: translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  backface-visibility: hidden;
  -moz-osx-font-smoothing: grayscale;
  transition-duration: 0.3s;
  transition-property: transform;
  &: hover {
    transform: scale(1.05);
    color: #707070;
    text-decoration: none !important;
  }
  &: focus {
    outline: none;
  }
  &: visited, active {
    color: #707070;
  }
`;

const ContactButton = styled(Button)`
  background: none;
  color: #707070;
  padding: 10px 20px 10px 20px;
  border-radius: 8px;
  border: 1.5px solid #fcc8c8;
  margin: 10px 15px 0 0;
  float: right;

  &:hover {
    transform: scale(0.9);
  }
`;
