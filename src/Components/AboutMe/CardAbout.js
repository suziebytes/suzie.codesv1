import React from "react";
// import "./App.css";
// import styles from "./styles";
import aboutimg from "./aboutimg.jpg";
import styled from "styled-components";
import Card from "react-bootstrap/Card";

export default function CardAbout() {
  return (
    <Card>
      <Wrapper>
        <CardTitle>FRONT END DEVELOPER</CardTitle>
        <CardText>
          I merged my creative design background with my technical experience to
          build eye catching & functional products for my clients.
        </CardText>
      </Wrapper>
    </Card>
  );
}

const Wrapper = styled.div`
  margin: 15px;
`;

const CardTitle = styled.h2`
  font-size: 13pt;
  font-weight: 500;
  letter-spacing: 2px;
  color: #388e71;
  text-align: center;
  padding: 20px 0 20px 0;
`;

const CardText = styled.p`
  font-size: 9pt;
  font-weight: 200;
  letter-spacing: 1.5px;
  color: #707070;
  text-align: left;
`;
