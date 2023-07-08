import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 592px;
  background: ${(props) => props.theme.box.color};
  padding: 56px;
  border: 6px solid rgba(209, 213, 218, 0.3);
  box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02),
    0px 16px 58px rgba(9, 10, 51, 0.03);
  border-radius: 4px;

  &:hover {
    border: ${(props) => props.theme.box.hover};
  }
`;

export const Title = styled.h3`
  margin: 0;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  letter-spacing: 0.05em;
  color: ${(props) => props.theme.color.projectHeader};
`;

export const Description = styled.p`
  margin-top: 24px;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 140%;
  letter-spacing: 0.05em;
  color: ${(props) => props.theme.color.text};
`;

export const LinkWrapper = styled.div`
  margin-top: 24px;
`;

export const Text = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 140%;
  display: flex;
  align-items: center;
  letter-spacing: 0.05em;
  color: ${(props) => props.theme.color.text};
`;

export const Link = styled.a`
  word-break: break-word;
  font-weight: 400;
  font-size: 18px;
  line-height: 140%;
  letter-spacing: 0.05em;
  color: ${(props) => props.theme.link.color};
  margin-left: 8px;
`;
