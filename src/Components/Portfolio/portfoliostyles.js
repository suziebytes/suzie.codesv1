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
  font-size: 28pt;
  font-weight: 500;
  letter-spacing: 2px;
  color: #e88385;
  text-align: center;
  padding: 20px 0 10px 0;
`;

export const Display = styled.div`
  display: flex;
  flex-direction: column;
  background: #f2eeef;
  @media (max-width: 450) {
    flex-direction: row;
  }
`;
export const Img = styled.img`
  height: 100%;
  width: 80%;
  border: 3px solid white;
  transform: translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, .7);
  backface-visibility: hidden;
  -moz-osx-font-smoothing: grayscale;
  transition-duration: 0.3s;
  transition-property: transform;
  &: hover {
    transform: scale(1.05);
`;

export const ImageDiv = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px 0 10px 0;
`;

export const Line = styled.hr`
  width: 70%;
  border: 1.5px solid #f88181;
`;
