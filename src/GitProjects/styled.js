import styled from "styled-components";
import { ReactComponent as IconGit } from "../SVG/IconGit.svg";
import { ReactComponent as Danger } from "../SVG/Danger.svg";
import { ReactComponent as Spinner } from "../SVG/icon-spinner.svg";

export const Wrapper = styled.section`
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

export const Body = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 32px;
  margin-top: 24px;
  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

export const StyledIconDanger = styled(Danger)`
  path {
    transition: stroke 0.3s;
    stroke: ${(props) => props.theme.color.header};
  }
  display: block;
  margin: 0 auto;
  margin-top: 95.5px;
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
`;

export const ButtonLink = styled.a`
  display: block;
  text-align: center;
  margin: auto;
  text-decoration: none;
`;

export const Button = styled.button`
  width: 168px;
  padding: 12px 16px;
  gap: 16px;
  transition: background 0.3s, box-shadow 0.3s;
  background: ${(props) => props.theme.button.color};
  border: 1px solid rgba(209, 213, 218, 0.1);
  border-radius: 4px;
  color: white;

  &:focus {
    box-shadow: ${(props) => props.theme.button.focus};
  }
`;

export const LoadingDescription = styled.p`
  margin-top: 88px;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 140%;
  text-align: center;
  letter-spacing: 0.05em;
  transition: color 0.3s;
  color: ${(props) => props.theme.color.header};
`;

export const StyledIconSpinner = styled(Spinner)`
  display: block;
  margin: 0 auto;
  margin-top: 48px;
  transition: stroke 0.3s;

  #Ellipse1 {
    stroke: ${(props) => props.theme.circle.elipse1};
  }

  #Ellipse2 {
    stroke: ${(props) => props.theme.circle.elipse2};
    position: relative;
    animation: rotate 2s linear infinite;
    transform-origin: center;
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
