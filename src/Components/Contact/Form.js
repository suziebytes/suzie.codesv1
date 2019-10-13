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

export default function Form() {
  return (
    <div>
      <form
        action="https://mailthis.to/suziebytes"
        method="POST"
        encType="multipart/form-data"
      >
        <Row>
          <Input type="text" name="name" placeholder="Name" required />
          <Input type="text" name="email" placeholder="Email" required />
        </Row>
        <Row>
          <Select name="project" placeholder="Project Type" size="3">
            <Option value="" disabled="disabled">
              Please Select One
            </Option>
            <Option value="1">Design</Option>
            <Option value="2">Website Build</Option>
            <Option value="3">Other</Option>
          </Select>
          <Input type="text" name="budget" placeholder="Budget" />
        </Row>
        <Row>
          <TextArea
            name="message"
            placeholder="Additional Information"
          ></TextArea>
        </Row>
        <CenterDiv>
          <Row>
            <Button type="submit" value="Send">
              SEND
            </Button>
          </Row>
        </CenterDiv>
      </form>
    </div>
  );
}
