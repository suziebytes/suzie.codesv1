import styled from "styled-components";

export const Card = styled.div`
  border: 1px solid #6d9165;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 8px;
  margin-bottom: 3%;
  width: 95%;
`;

export const Wrapper = styled.div`
  margin: 20px;
`;

export const CardTitle = styled.h2`
  font-size: 13pt;
  font-weight: 500;
  letter-spacing: 2px;
  color: #388e71;
  text-align: center;
  padding: 20px 0 20px 0;
`;

export const CardText = styled.p`
  font-size: 8.5pt;
  font-weight: 200;
  letter-spacing: 1px;
  color: #707070;
  text-align: left;
`;

export const Button = styled.button`
  font-size: 9pt;
  color: #707070;
  padding: 5px 0 5px 0;
  border: 1px solid #fcc8c8;
  background: rgba(255, 255, 255, 0.6);
  border: 1px solid #64c7a6;
  width: 150px;
  display: inline-block;
  vertical-align: middle;
  transform: translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  backface-visibility: hidden;
  -moz-osx-font-smoothing: grayscale;
  transition-duration: 0.3s;
  transition-property: transform;
  &: hover {
    transform: scale(1.05);
  }
  &: focus {
    outline: none;
  }
`;

export const GreenButton = styled(Button)`
  border: 1px solid #64c7a6;
  background: #1abc9c;
  margin: 5px 0 10px 0;
  font-size: 8pt;
  color: white;
`;

export const CenterDiv = styled.div`
  display: flex;
  justify-content: center;
`;
