import styled from "styled-components";

export const Card = styled.div`
  border: 1px solid #fcc8c8;
  background: rgba(255, 255, 255, 1);
  border-radius: 8px;
  margin-bottom: 10px;
  width: 95%;
`;

export const Wrapper = styled.div`
  margin: 20px;
`;

export const CardTitle = styled.h2`
  font-size: 20pt;
  font-weight: 500;
  letter-spacing: 2px;
  color: #d5a2a3;
  text-align: center;
  padding: 10px 0 5px 0;
`;

export const SubTitle = styled.h3`
  font-size: 10pt;
  letter-spacing: 2px;
  font-weight: 300;
  color: #d5a2a3;
  text-align: left;
  padding: 10px 0 10px 0;
`;

export const CardText = styled.p`
  font-size: 8.5pt;
  font-weight: 100;
  letter-spacing: 1px;
  color: #707070;
  text-align: left;
`;

export const Line = styled.hr`
  width: 70%;
  border: 2px solid #f88181;
`;

export const Button = styled.button`
  font-size: 9pt;
  color: white;
  padding: 5px 0 5px 0;
  border: 1px solid #d5a2a3;
  background: #F87B7D
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