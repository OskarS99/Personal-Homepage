import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 120px;
  max-width: 691px;
  margin-bottom: 120px;

  @media (max-width: 767px) {
    margin-top: 48px;
    margin-inline: 16px;
    margin-bottom: 31px;
  }
`;

export const Caption = styled.p`
  margin-bottom: 24px;
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 130%;
  text-transform: uppercase;
  color: ${(props) => props.theme.color.text};
  white-space: nowrap;
`;

export const Post = styled.a`
  font-style: normal;
  font-weight: 900;
  font-size: 32px;
  line-height: 39px;
  letter-spacing: 0.05em;
  color: ${(props) => props.theme.mail.color};
  text-decoration: none;

  &:hover {
    color: ${(props) => props.theme.mail.hover};
  }

  @media (max-width: 767px) {
    font-size: 18px;
    line-height: 22px;
  }
`;

export const Text = styled.p`
  margin-top: 24px;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 140%;
  letter-spacing: 0.05em;
  margin-bottom: 56px;
  color: ${(props) => props.theme.color.header};
`;

export const Link = styled.a`
  margin-right: 24px;
  path {
    fill: ${(props) => props.theme.socialMedia.color};
  }
  &:focus {
    path {
      fill: ${(props) => props.theme.socialMedia.focus};
    }
  }
`;
