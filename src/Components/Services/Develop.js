import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import styled from "styled-components";
import {
  Card,
  Wrapper,
  CardTitle,
  CardText,
  Line,
  SubTitle,
  Button
} from "./servicesstyles";
import { CenterDiv } from "../AboutMe/aboutstyles";

export default function Develop() {
  return (
    <div>
      <Card>
        <Wrapper>
          <CardTitle>DEVELOP</CardTitle>
          <Line />
          <CardText>
            It’s all about execution. Let’s take our website design blueprint
            and build something for the world to experience. Leave the hard work
            to me and allow me to create a responsive website.
          </CardText>
        </Wrapper>
      </Card>

      <Card>
        <Wrapper>
          <Row>
            <Col>
              <Tag>
                Everyone is unique. <br></br>
                Let us help you tell your story.
              </Tag>
            </Col>
          </Row>
          <CenterDiv>
            <Row>
              <Button>Let's Talk</Button>
            </Row>
          </CenterDiv>
        </Wrapper>
      </Card>
    </div>
  );
}

const Tag = styled(SubTitle)`
  font-size: 9.5pt;
  letter-spacing: 1px;
  text-align: center;
`;