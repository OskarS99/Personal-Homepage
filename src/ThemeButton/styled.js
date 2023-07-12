import styled, { css } from "styled-components";
import { ReactComponent as Light } from "../SVG/LightButton.svg";
import { Keyframes } from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 26px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;

export const Button = styled.button`
  border: none;
  background: none;
  padding: 0px;
`;

export const Caption = styled.p`
  width: 99px;
  color: #6e7e91;
  height: 16px;
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 130%;
  text-transform: uppercase;

  @media (max-width: 767px) {
    display: none;
  }
`;

export const LightThemeButton = styled(Light)`
  #slider {
    position: absolute;
    ${({ move }) =>
      move
        ? css`
            animation: go 0.5s forwards;
          `
        : css`
            animation: back 0.5s forwards;
          `}
  }
  @keyframes go {
    from {
      transform: translateX(0px);
    }
    to {
      transform: translateX(20px);
    }
  }
  @keyframes back {
    from {
      transform: translateX(20px);
    }
    to {
      transform: translateX(0px);
    }
  }
`;
