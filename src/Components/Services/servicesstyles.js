import styled from "styled-components";

export const Card = styled.div`
  border: 1px solid #fcc8c8;
  background: rgba(255, 255, 255, 1);
  border-radius: 8px;
  margin-bottom: 10px;
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
  padding: 10px 0 0 0;
`;

export const SubTitle = styled.h3`
  font-size: 15pt;
  letter-spacing: 2px;
  font-weight: 300;
  color: #d5a2a3;
  text-align: left;
  padding: 10px 0 -5px 0;
`;

export const CardText = styled.p`
  font-size: 10.5pt;
  font-weight: 100;
  letter-spacing: 1px;
  color: #707070;
  text-align: left;
  padding: 20px 0px 20px 0px;
`;

export const Line = styled.hr`
  width: 70%;
  border: 1.5px solid #f88181;
`;
