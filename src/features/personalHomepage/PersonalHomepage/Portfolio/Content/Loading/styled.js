import styled from "styled-components";
import { ReactComponent as Spinner } from "./icon-spinner.svg";

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

  @media (max-width: 767px) {
    font-size: 17px;
    line-height: 23.8px;
  }
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

  @media (max-width: 767px) {
    width: 80px;
    height: 80px;
  }
`;
