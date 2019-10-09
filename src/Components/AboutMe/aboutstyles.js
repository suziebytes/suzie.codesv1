import styled from "styled-components";

const aboutstyles = () => {
  const Card = styled.div`
    border: 1px solid #6d9165;
    background: rgba(255, 255, 255, 0.9);
    border-radius: 8px;
    margin-bottom: 3%;
    width: 95%;
  `;

  const Wrapper = styled.div`
    margin: 20px;
  `;

  const CardTitle = styled.h2`
    font-size: 13pt;
    font-weight: 500;
    letter-spacing: 2px;
    color: #388e71;
    text-align: center;
    padding: 20px 0 20px 0;
  `;

  const CardText = styled.p`
    font-size: 8.5pt;
    font-weight: 200;
    letter-spacing: 1px;
    color: #707070;
    text-align: left;
  `;
};
