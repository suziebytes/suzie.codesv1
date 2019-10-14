import React from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import styled from "styled-components";

export const Button = styled.button`
  font-size: 11pt;
  color: white;
  padding: 5px 0 5px 0;
  margin-bottom: 10px;
  border: 1px solid #e88385;
  background: #e9b1b2;
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

export const renderTooltip = props => (
  <div
    {...props}
    style={{
      fontSize: "10pt",
      backgroundColor: "white",
      border: "1px solid #e9b1b2",
      padding: "2px 10px",
      color: "#707070",
      borderRadius: 3,

      ...props.style
    }}
  >
    I'll buy the coffee!
  </div>
);

export default function LetsTalkBtn() {
  return (
    <OverlayTrigger
      placement="right"
      delay={{ show: 250, hide: 400 }}
      overlay={renderTooltip}
    >
      <Button>Let's Talk</Button>
    </OverlayTrigger>
  );
}
