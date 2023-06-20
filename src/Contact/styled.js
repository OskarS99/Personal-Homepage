import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 120px;
  max-width: 691px;
`;

export const Caption = styled.p`
  margin-bottom: 24px;
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 130%;
  text-transform: uppercase;
  color: #6e7e91;
  white-space: nowrap;
`;
export const Post = styled.a`
  font-style: normal;
  font-weight: 900;
  font-size: 32px;
  line-height: 39px;
  letter-spacing: 0.05em;
  color: black;
  text-decoration: none;

  &:hover {
    color: #0366d6;
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
`;

export const Link = styled.a`
  margin-right: 24px;
  &:focus {
    path {
      fill: #0366d6;
    }
  }
`;
