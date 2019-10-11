import React from "react";
import desktop from "./desktop.png";
import styled from "styled-components";

export default function Computer() {
  return (
    <div>
      <Desktop></Desktop>
      <Red></Red>
    </div>
  );
}

const Desktop = styled.div`
  background-image: url(${desktop});
  min-height: 100vh;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Red = styled.div`
  top: 10%;
  left: 24.5%;
  height: 49%;
  width: 66%;
  background-color: red;
  position: absolute;
`;
