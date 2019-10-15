import React from "react";
import styled from "styled-components";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "react-alice-carousel/lib/alice-carousel.css";

// export default function Gallery() {
//   const [display, setDisplay] = [1];

//   return (
//     <Wrapper>
//       <CardTitle>RECENT WORK</CardTitle>
//       {Gallery}
//     </Wrapper>
//   );
// }

export const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr 2fr;
  background: #f2eeef;
  grid-template-areas: "CardTitle Thumbs"
  align-content: center;
`;

export const CardTitle = styled.h2`
  font-size: 20pt;
  font-weight: 500;
  letter-spacing: 2px;
  color: #e88385;
  text-align: center;
  padding: 20px 0 20px 0;
`;

// export const Thumbs = styled.div`
//   display: flex;
//   flex-direction: column;
//   width: 40%;
//   @media (max-width: 450) {
//     flex-direction: row;
//   }
// `;
