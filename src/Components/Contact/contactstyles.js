import styled from "styled-components";

export const Button = styled.button`
  font-size: 11pt;
  color: white;
  padding: 5px 0 5px 0;
  margin: 10px;
  background: #e0b3b3;
  border: 1px solid white;
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

export const Input = styled.input`
  font-size: 11pt;
  width: 100%;
  font-weight: 100;
  letter-spacing: 0.5px;
  color: #707070;
  text-align: center;
  border: 1px solid #fcc8c8;
  padding: 5px;
  margin: 5px;
  vertical-align: middle;
  transform: translateZ(0);
  backface-visibility: hidden;
  -moz-osx-font-smoothing: grayscale;
  transition-duration: 0.3s;
  transition-property: transform;
  &: focus {
    outline: none;
    transform: scale(1.02);
    border: 1px dashed #fcc8c8;
  }
`;

export const Select = styled.select`
  font-size: 11pt;
  font-weight: 100;
  letter-spacing: 0.5px;
  color: #707070;
  text-align: center;
  border: 1px solid #fcc8c8;
  height: 33px;
  width: 100%;
  padding: 5px;
  margin: 4px;
  vertical-align: middle;
  transform: translateZ(0);
  backface-visibility: hidden;
  -moz-osx-font-smoothing: grayscale;
  transition-duration: 0.3s;
  transition-property: transform;
  &: focus {
    outline: none;
    transform: scale(1.02);
    border: 1px dashed #fcc8c8;
  }
`;

export const Option = styled.option`
  font-size: 11pt;
  font-weight: 100;
  letter-spacing: 0.5px;
  padding: 5px;
  margin: 5px;
  color: #707070;
  text-align: center;
  vertical-align: middle;
  transform: translateZ(0);
  backface-visibility: hidden;
  -moz-osx-font-smoothing: grayscale;
  transition-duration: 0.3s;
  transition-property: transform;
`;

export const Talk = styled.h1`
  font-size: 45pt !important;
  color: #707070;
  font-weight: 200;
  margin-bottom: 0 !important;
`;

export const TextArea = styled.textarea`
  height: 125px;
  margin: 5px;
  font-size: 11pt;
  width: 100%;
  padding: 10px;
  font-weight: 100;
  letter-spacing: 0.5px;
  color: #707070;
  text-align: left;
  border: 1px solid #fcc8c8;
  transform: translateZ(0);
  backface-visibility: hidden;
  -moz-osx-font-smoothing: grayscale;
  transition-duration: 0.3s;
  transition-property: transform;
  &:focus {
    outline: none;
    transform: scale(1.02);
    border: 1px dashed #fcc8c8;
  }
`;

export const CenterDiv = styled.div`
  display: flex;
  justify-content: center;
`;

export const FormWrapper = styled.div`
  padding: 15% 0% 10% 0%;
`;
