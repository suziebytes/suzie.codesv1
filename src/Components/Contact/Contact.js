import React from "react";
import styled from "styled-components";
import bgimg from "./bgimg.jpg";
import { Button, Talk, CenterDiv, FormWrapper } from "./contactstyles";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "./Form";

export default function Contact() {
  return (
    <Background>
      <FormWrapper>
        <Row>
          <Col lg="6">
            <CenterDiv>
              <Talk>let's talk</Talk>
            </CenterDiv>
            <CenterDiv>
              <Form />
            </CenterDiv>
            <CenterDiv>
              <Button>SEND</Button>
            </CenterDiv>
          </Col>
          <Col lg="6"> </Col>
        </Row>
      </FormWrapper>
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
