import React from "react";
import desktop from "./desktop.png";
import styled from "styled-components";

export default function GridSample() {
  return (
    <Grid>
      <Computer>
        <Video autoplay muted>
          <source src="qa.mp4" type="video/mp4" />
        </Video>
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

// const Computer = styled.div`
//   grid-area: "computer";
//   background-image: url(${desktop});
//   height: 100vh
//   background-repeat: no-repeat;
//   background-position: center;
//   background-size: cover;
//   padding: 3.9% 10% 29% 9.5%;
// `;

const Computer = styled.div`
  grid-area: "computer";
  background-image: url(${desktop});
  background-position: center;
  background-size: cover;
  padding: 3.9% 10% 29% 9.5%;
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  border: 1px solid orange;
`;
