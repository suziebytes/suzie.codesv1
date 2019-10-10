import React from "react";
import desktop from "./desktop.png";
import styled from "styled-components";

export default function Computer() {
  return (
    <div>
      <Desktop></Desktop>
    </div>
  );
}

const Desktop = styled.div`
  background-image: url(${desktop});
  min-height: 100vh;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
`;
