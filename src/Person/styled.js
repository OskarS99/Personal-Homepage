import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  margin-top: 119px;
  max-width: 1216px;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 66px;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

export const Photo = styled.img`
  width: 398px;
  height: 398px;
  border-radius: 50%;
  border-color: #c4c4c4;

  @media (max-width: 767px) {
    width: 128px;
    height: 128px;
  }
`;

export const Caption = styled.p`
  margin-top: 64px;
  width: 43px;
  height: 16px;
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 130%;
  text-transform: uppercase;
  color: ${(props) => props.theme.color.text};
`;

export const Name = styled.h1`
  width: 415px;
  height: 46px;
  font-style: normal;
  font-weight: 900;
  font-size: 38px;
  line-height: 46px;
  letter-spacing: 0.05em;
  color: ${(props) => props.theme.color.header};
`;
export const Description = styled.p`
  width: 633px;
  height: 57px;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 140%;
  letter-spacing: 0.05em;
  color: ${(props) => props.theme.color.text};
`;

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 16px;
  gap: 16px;
  width: 154px;
  height: 49px;
  background: ${(props) => props.theme.button.color};
  border: ${(props) => props.theme.button.border};
  border-radius: 4px;

  &:focus {
    box-shadow: ${(props) => props.theme.button.focus};
  }

  &:active {
    box-shadow: ${(props) => props.theme.button.selected};
  }
`;

export const ButtonText = styled.p`
  width: 82px;
  height: 25px;
  font-style: normal;
  font-weight: 400;
  font-size: 20.0584px;
  line-height: 24px;
  color: #ffffff;
`;
export const ButtonLink = styled.a`
  text-decoration: none;
`;
