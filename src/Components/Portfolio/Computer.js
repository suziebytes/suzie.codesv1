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
  width: 100%;
  min-height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Red = styled.div`
  border: red;
  background-color: pink;
  position: absolute;
`;
