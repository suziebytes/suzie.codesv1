import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
  Card,
  Wrapper,
  CardTitle,
  CardText,
  GreenButton,
  CenterDiv
} from "./aboutstyles";

export default function TechSpecs() {
  return (
    <Card>
      <Wrapper>
        <CardTitle>TECH SPEC SHEET</CardTitle>
        <CardText>
          <Row>
            <Col>
              HTML
              <br></br>
              CSS <br></br>
              JavaScript <br></br>
              React
            </Col>
            <Col>
              Git <br></br>
              Bootstrap <br></br>
              Materialize <br></br>+ always learning <br></br>{" "}
            </Col>
          </Row>
        </CardText>
      </Wrapper>
      <CenterDiv>
        <GreenButton href="./SusieResumeWebVersion.pdf" target="_blank">
          Download Resume
        </GreenButton>
      </CenterDiv>
    </Card>
  );
}
