import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Computer from "./Computer";
import Gallery from "./Gallery";
import Container from "react-bootstrap/Container";

export default function Portfolio() {
  return (
    <div>
      <Row>
        <Col lg="9" className="px-0 ">
          <Computer />
        </Col>
        <Col lg="3" className="px-0">
          <Gallery />{" "}
        </Col>
      </Row>
    </div>
  );
}
