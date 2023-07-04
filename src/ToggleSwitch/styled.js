import styled from "styled-components";
import Sun from "../SVG/sun.svg";

export const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 48px;
  height: 26px;
  right: 0;
`;
export const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: black;
  border-radius: 200px;

  &::before {
    position: absolute;
    content: ${Sun};
    color: white;
    background-color: grey;
    height: 20px;
    width: 20px;
    left: 3px;
    bottom: 3px;

    border-radius: 200px;
  }
`;

export const Input = styled.input`
  display: none;

  &:checked + ${Slider}::before {
    transform: translateX(100%);
  }
`;
