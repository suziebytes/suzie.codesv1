import styled from "styled-components";
import desktop from "./desktop.png";

export const Grid = styled.div`
  display: grid;
  background: black;
  width: 100%;
  @media (max-width: 370px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    grid-templatea-areas: "Computer" "Gallery";
  }
  @media (min-width: 400px) {
    grid-template-columns: 3fr 1fr;
    grid-template-rows: 1fr;
    grid-templatea-areas: "computer gallery";
  }
`;

export const Computer = styled.div`
  grid-area: "computer";
  background-image: url(${desktop});
  background-position: center;
  background-size: cover;
  padding: 4% 10% 32% 10%;
`;

export const Video = styled.video`
  width: 100%;
  height: 100%;
`;

export const CardTitle = styled.h2`
  font-size: 20pt;
  font-weight: 500;
  letter-spacing: 2px;
  color: #e88385;
  text-align: center;
  padding: 20px 0 20px 0;
`;
