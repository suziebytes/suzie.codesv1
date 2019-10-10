import React from "react";
import {
  Card,
  CardTitle,
  CardText,
  Wrapper,
  GreenButton,
  CenterDiv
} from "./aboutstyles";

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
      <CenterDiv>
        <GreenButton>Learn More</GreenButton>
      </CenterDiv>
    </Card>
  );
}
