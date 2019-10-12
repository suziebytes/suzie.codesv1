import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import {
  Card,
  Wrapper,
  CardTitle,
  CardText,
  Line,
  SubTitle
} from "./servicesstyles";

export default function Design() {
  return (
    <div>
      <Card>
        <Wrapper>
          <CardTitle>DESIGN</CardTitle>
          <Line />
          <CardText>
            Offering full and partial design services to help you make a lasting
            impression. We curate and create an aesthetically unique brand
            presence that resonates with your vision.
          </CardText>
        </Wrapper>
      </Card>

      <Card>
        <Wrapper>
          <Row>
            <Col>
              <SubTitle>Web Presence</SubTitle>
              <CardText>
                Custom Design <br></br>
                Blog Design <br></br>
                SquareSpace Design
              </CardText>
            </Col>
            <Col>
              {" "}
              <SubTitle>Branding</SubTitle>
              <CardText>
                Logo Design <br></br>
                Business Cards<br></br>
                Marketing Materials
              </CardText>
            </Col>
          </Row>
        </Wrapper>
      </Card>
    </div>
  );
}
