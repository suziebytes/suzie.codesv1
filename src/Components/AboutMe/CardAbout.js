import React from "react";
import self from "./self.png";
import styled from "styled-components";
import Image from "react-bootstrap/Image";
import Social from "./Social";

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
        <CenterDiv>
          <Img src={self} />
        </CenterDiv>
        <CardTitle>FRONT END DEVELOPER</CardTitle>
        <CardText>
          I merged my creative design background with my technical experience to
          build eye catching & functional products for my clients.
        </CardText>
      </Wrapper>
      <CenterDiv>
        {/* <GreenButton>Get Personal</GreenButton> */}
        <Social />
      </CenterDiv>
    </Card>
  );
}

const Img = styled.img`
  width: 175px;
`;
