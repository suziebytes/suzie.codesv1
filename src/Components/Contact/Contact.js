import React from "react";
import styled from "styled-components";
import bgimg from "./bgimg.jpg";
import { Talk, CenterDiv, FormWrapper } from "./contactstyles";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import Form from "./Form";
import ScrollableAnchor from "react-scrollable-anchor";

export default function Contact() {
  return (
    <ScrollableAnchor id={"contact"}>
      <Background>
        <FormWrapper>
          <Container>
            <Talk>let's talk</Talk>

            <Row>
              <Col lg="6">
                <Form />
              </Col>
            </Row>
            <Col md={{ span: 6, offset: 6 }}> </Col>
          </Container>
        </FormWrapper>
      </Background>
    </ScrollableAnchor>
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
