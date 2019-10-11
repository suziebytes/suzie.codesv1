import React from "react";
import desktop from "./desktop.png";
import styled from "styled-components";
import toki from "./toki.png";

export default function GridSample() {
  return (
    <Grid>
      <Computer>
        <Video />
      </Computer>
    </Grid>
  );
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-template-rows: 1fr;
  grid-templatea-areas: "computer carousel";
  width: 100%;
`;
//coursel will be an import of <Gallery/>

const Computer = styled.div`
  grid-area: "computer";
  background-image: url(${desktop});
  height: 100vh
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding: 3.9% 10% 10% 10%; 
`;

const Video = styled.div`
  background-image: url(${toki});
  width: 100%;
  height: 100%;
`;
