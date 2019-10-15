import React from "react";
import styled from "styled-components";

const thumbs = [
  { src: "./qahousescreen.png", id: 1 },
  { src: "./loginscreen.png", id: 2 },
  { src: "./atomicscreen.png", id: 3 },
  { src: "./atomicscreen.png", id: 4 }
];

function createGallery() {}

export default function Gallery() {
  return (
    <Wrapper>
      <CardTitle>RECENT WORK</CardTitle>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr 2fr;
  background: #f2eeef;
  grid-template-areas: "CardTitle Thumbs"
  align-content: center;
`;

const CardTitle = styled.h2`
  font-size: 20pt;
  font-weight: 500;
  letter-spacing: 2px;
  color: #e88385;
  text-align: center;
  padding: 20px 0 20px 0;
`;
