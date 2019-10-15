import React from "react";
import desktop from "./desktop.png";
import styled from "styled-components";
import { Grid, Computer, Video, CardTitle } from "./portfoliostyles";

export default function GridSample() {
  //collection of all videos in div
  function Thumbs() {
    return (
      <Display>
        <CardTitle>RECENT WORK</CardTitle>
        <ImageDiv>
          <Img src="./qahousescreen.png" />
        </ImageDiv>
        <ImageDiv>
          <Img src="./loginscreen.png" />
        </ImageDiv>
        <ImageDiv>
          <Img src="./atomicscreen.png" />
        </ImageDiv>
        <ImageDiv>
          <Img src="./candlesscreen.png" />
        </ImageDiv>
      </Display>
    );
  }

  return (
    <Grid>
      <Computer>
        <Video autoplay>
          <source autoplay src="qa.mp4" type="video/mp4" />
        </Video>
      </Computer>

      <Thumbs />
    </Grid>
  );
}

const Display = styled.div`
  display: flex;
  flex-direction: column;
  background: #f2eeef;
  @media (max-width: 450) {
    flex-direction: row;
  }
`;
const Img = styled.img`
  height: 100%;
  width: 80%;
`;

const ImageDiv = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px 0 10px 0;
`;
