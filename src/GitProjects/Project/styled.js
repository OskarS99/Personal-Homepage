import styled from "styled-components";

export const Wrapper = styled.div`
  background: #ffffff;
  padding: 56px;
  border: 6px solid rgba(209, 213, 218, 0.3);
  box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02),
    0px 16px 58px rgba(9, 10, 51, 0.03);
  border-radius: 4px;

  &:hover {
    border: 6px solid rgba(3, 102, 214, 0.2);
  }
`;

export const Title = styled.h3`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  letter-spacing: 0.05em;
  color: #0366d6;
`;

export const Description = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 140%;
  letter-spacing: 0.05em;
  color: #6e7e91;
`;

export const Name = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 140%;
  letter-spacing: 0.05em;
  color: #6e7e91;
`;

export const Link = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 140%;
  letter-spacing: 0.05em;
  color: #0366d6;
`;
