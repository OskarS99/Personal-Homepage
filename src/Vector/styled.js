import styled, { keyframes } from "styled-components";
import { ReactComponent as Button } from "../SVG/ToggleLight .svg";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 12px;
  position: absolute;
  width: 159px;
  left: 1411px;
  top: 119px;
  height: 26px;
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
`;

export const SwitchButton = styled(Button)`
  #Vector {
    position: relative;
  }
  &:active {
    #toggle {
      position: absolute;
      overflow: hidden;
      cursor: pointer;
      animation: move 1s;
    }
  }
  @keyframes move {
    from {
      transform: translateX(0%);
    }
    to {
      transform: translateX(100%);
    }
  }
`;
