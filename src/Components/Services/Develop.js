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
import LetsTalkBtn from "./LetsTalkBtn";

export default function Develop() {
  return (
    <div>
      <Card>
        <Wrapper>
          <CardTitle>DEVELOP</CardTitle>
          <Line />
          <CardText>
            It’s all about execution.
            <br></br>Let’s take our website design blueprint and build something
            for the world to experience. Leave the hard work to us and allow us
            to create a responsive website.
          </CardText>
        </Wrapper>
      </Card>

      <Card>
        <Wrapper>
          <Row>
            <Col>
              <Tag>
                Everyone is unique. <br></br>
                Let us help you tell your story.<br></br>
              </Tag>
            </Col>
          </Row>
          <CenterDiv>
            <Row>
              <LetsTalkBtn href="Contact" />
            </Row>
          </CenterDiv>
        </Wrapper>
      </Card>
    </div>
  );
}

const Tag = styled(SubTitle)`
  font-size: 11.5pt;
  letter-spacing: 1px;
  text-align: center;
  padding: 20px 0px 10px 0px;
`;
