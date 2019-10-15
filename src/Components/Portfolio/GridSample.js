import React from "react";
import desktop from "./desktop.png";
import styled from "styled-components";

export default function GridSample() {
  return (
    <Grid>
      <Computer>
        <Video>
          <source autoplay muted src="qa.mp4" type="video/mp4" />
        </Video>
      </Computer>
    </Grid>
  );
}

const Grid = styled.div`
  display: grid;
  background: black;
  grid-template-columns: 3fr 1fr;
  grid-template-rows: 1fr;
  grid-templatea-areas: "computer carousel";
  width: 100%;
  @media (max-width: 400px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 2fr;
  }
`;
//coursel will be an import of <Gallery/>

const Computer = styled.div`
  grid-area: "computer";
  background-image: url(${desktop});
  background-position: center;
  background-size: cover;
  padding: 4% 10% 32% 10%;
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
`;
