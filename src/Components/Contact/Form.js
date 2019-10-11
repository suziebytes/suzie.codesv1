import React from "react";
import { Input, Select, Option, TextArea, FormWrapper } from "./contactstyles";
import Row from "react-bootstrap/Row";

export default function Form() {
  return (
    <div>
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
        <TextArea placeholder="Additional Information"></TextArea>
      </Row>
    </div>
  );
}
