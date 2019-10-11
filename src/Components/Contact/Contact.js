import React from "react";
import styled from "styled-components";
import bgimg from "./bgimg.jpg";
import { Button, Talk, Wrapper } from "./contactstyles";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Container from "react-bootstrap/Container";
import Form from "./Form";

export default function Contact() {
  return (
    <Background>
      <Row>
        <Col lg="6">
          <Wrapper>
            <Talk>let's talk</Talk>
            <Form />
            <Button>SEND</Button>
          </Wrapper>
        </Col>
        <Col lg="6">nothing here </Col>
      </Row>
    </Background>
  );
}

const Background = styled.div`
  background-image: url(${bgimg});
  background-color: #f2eeef;
  min-height: 100vh;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
`;
