import styled from "styled-components";
import { ReactComponent as IconGit } from "../IconGit.svg";
import { ReactComponent as Danger } from "../Danger.svg";
import { ReactComponent as Spinner } from "../icon-spinner.svg";

export const Wrapper = styled.section`
  max-width: 1215px;
  margin-top: 72px;
`;

export const StyledIconGit = styled(IconGit)`
  display: block;
  margin: 0 auto;
`;

export const Header = styled.h2`
  font-style: normal;
  font-weight: 900;
  font-size: 30px;
  line-height: 36px;
  text-align: center;
  letter-spacing: 0.05em;
  margin-top: 13px;
`;

export const Text = styled.p`
  margin-top: 8px;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 140%;
  letter-spacing: 0.05em;
  text-align: center;
`;

export const Body = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 32px;
  margin-top: 24px;
`;

export const StyledIconDanger = styled(Danger)`
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
`;

export const ErrorDescription = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 140%;
  text-align: center;
  letter-spacing: 0.05em;
  margin: 32px auto;
`;

export const Link = styled.a`
  width: 168px;
  padding: 12px 16px;
  gap: 16px;
  background: #0366d6;
  border: 1px solid rgba(209, 213, 218, 0.1);
  border-radius: 4px;
  color: white;
  text-decoration: none;
  display: block;
  margin: auto;
  text-align: center;

  &:focus {
    box-shadow: 2px -2px 0px #8cc2ff, -2px 2px 0px #8cc2ff, 2px 2px 0px#8CC2FF,
      -2px -2px 0px #8cc2ff;
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
`;

export const StyledIconSpinner = styled(Spinner)`
  display: block;
  margin: 0 auto;
  margin-top: 48px;
`;
