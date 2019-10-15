import React from "react";
import {
  Input,
  Select,
  Option,
  TextArea,
  Button,
  CenterDiv
} from "./contactstyles";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

export default function Form() {
  return (
    <form
      action="https://mailthis.to/suziebytes"
      method="POST"
      encType="multipart/form-data"
    >
      <Row>
        <Col lg="12">
          <Input type="text" name="name" placeholder="Name" required />
          <Input type="text" name="email" placeholder="Email" required />
        </Col>
      </Row>
      <Row>
        <Col lg="12">
          <Select name="project" placeholder="Project Type" size="3">
            <Option value="" disabled="disabled">
              Please Select One
            </Option>
            <Option value="1">Design</Option>
            <Option value="2">Website Build</Option>
            <Option value="3">Other</Option>
          </Select>
          <Input type="text" name="budget" placeholder="Budget" />
        </Col>
      </Row>
      <Row>
        <Col lg="12">
          <TextArea
            name="message"
            placeholder="Additional Information"
          ></TextArea>
        </Col>
      </Row>

      <Row>
        <Col>
          <CenterDiv>
            <Button type="submit" value="Send">
              SEND
            </Button>
          </CenterDiv>
        </Col>
      </Row>
    </form>
  );
}
