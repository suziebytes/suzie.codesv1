import React from "react";
// import "./App.css";
// import styles from "./styles";
import mainimg from "./main.jpg";
import styled from "styled-components";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

function Landing() {
  return (
    <Background>
      <Container>
        <Row>
          <Col lg="7"></Col>
          <Col lg="5">
            <Wrapper>
              <Welcome>
                Hi,<br></br> I'm Suzie.
              </Welcome>
              <Tag>i make, break & fix things.</Tag>
              <Button>Learn More</Button>
            </Wrapper>
          </Col>
        </Row>
      </Container>
    </Background>
  );
}

export default Landing;

const Background = styled.div`
  background-image: url(${mainimg});
  background-color: #f2eeef;
  min-height: 100vh;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: left;
  background-color: #f2eeef;
  position: absolute;
  z-index: -1;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 235px;
`;

const Welcome = styled.h1`
  font-size: 45pt !important;
  color: #707070;
  font-weight: 200;
  margin-top: 80%;
  margin-bottom: 0 !important;
`;

const Tag = styled.span`
  font-size: 8pt !important;
  color: #707070;
  letter-spacing: 2px;
  font-weight: 200;
  padding: 0 0 25px 0;
`;

const Button = styled.button`
  font-size: 9pt;
  padding: 5px 45px 5px 45px;
  border: 1px solid #fcc8c8;
  background: rgba(255, 255, 255, 0.6);
  border: 1px solid #fcc8c8;
  &: hover {
  }
`;
