import styled from "styled-components";
import { ReactComponent as Danger } from "./Danger.svg";
import { ButtonLink } from "../../../ButtonLink";

export const Wrapper = styled.div`
  display: grid;
  justify-content: center;
`;

export const StyledIconDanger = styled(Danger)`
  path {
    transition: stroke 0.3s;
    stroke: ${(props) => props.theme.color.header};
  }
  display: block;
  margin: 0 auto;
  margin-top: 95.5px;

  @media (max-width: 767px) {
    height: auto;
    width: 32px;
  }
`;

export const ErrorHeader = styled.h3`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  text-align: center;
  letter-spacing: 0.05em;
  margin-top: 23.16px;
  transition: color 0.3s;
  color: ${(props) => props.theme.color.header};

  @media (max-width: 767px) {
    font-size: 18px;
    line-height: 21.78px;
  }
`;

export const ErrorDescription = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 140%;
  text-align: center;
  letter-spacing: 0.05em;
  margin: 32px auto;
  transition: color 0.3s;
  color: ${(props) => props.theme.color.header};

  @media (max-width: 767px) {
    font-size: 17px;
    line-height: 23.8px;
  }
`;

export const StyledButtonLink = styled(ButtonLink)`
  margin: 0 auto;
`;
