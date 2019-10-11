import React from "react";
import styled from "styled-components";

export default function Gallery() {
  return (
    <Wrapper>
      <CardTitle>RECENT WORK</CardTitle>
      <button>demo1</button>
      <button>demo2</button>
      <span>
        {" "}
        this should be a react gallery that scrolls to display varying portfolio
        thumbnail/screenshots. should i have a file with all the thumbnails here
        in an array?
      </span>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 25px 10px 25px 10px;
  min-height: 100vh;
  background: #f2eeef;
  display: flex;
  flex-direction: column;
  align-content: center;
`;

const CardTitle = styled.h2`
  font-size: 13pt;
  font-weight: 500;
  letter-spacing: 2px;
  color: #388e71;
  text-align: center;
  padding: 20px 0 20px 0;
`;
