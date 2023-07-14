import styled from "styled-components";
import { ReactComponent as IconGit } from "./IconGit.svg";

export const Section = styled.section`
  max-width: 1215px;
  margin-top: 72px;

  @media (max-width: 767px) {
    margin-top: 48px;
    margin-inline: 16px;
  }
`;

export const StyledIconGit = styled(IconGit)`
  display: block;
  margin: 0 auto;
  path {
    transition: fill 0.3s;
    fill: ${(props) => props.theme.color.IconGit};
  }
`;

export const Header = styled.h2`
  transition: color 0.3s;
  color: ${(props) => props.theme.color.header};
  font-style: normal;
  font-weight: 900;
  font-size: 30px;
  line-height: 36px;
  text-align: center;
  letter-spacing: 0.05em;
  margin-top: 13px;

  @media (max-width: 767px) {
    font-size: 18px;
    line-height: 21.78px;
  }
`;

export const Text = styled.p`
  transition: color 0.3s;
  color: ${(props) => props.theme.color.header};
  margin-top: 8px;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 140%;
  letter-spacing: 0.05em;
  text-align: center;

  @media (max-width: 767px) {
    font-size: 17px;
    line-height: 23.8px;
  }
`;
