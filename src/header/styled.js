import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 119px;
  max-width: 1089px;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 66px;
`;

export const Photo = styled.img`
  width: 398px;
  height: 398px;
  border-radius: 50%;
  border-color: #c4c4c4;
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
  color: #6e7e91;
`;

export const Name = styled.h1`
  width: 415px;
  height: 46px;
  font-style: normal;
  font-weight: 900;
  font-size: 38px;
  line-height: 46px;
  letter-spacing: 0.05em;
  color: #252525;
`;
export const Description = styled.p`
  width: 633px;
  height: 57px;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 140%;
  letter-spacing: 0.05em;
  color: #6e7e91;
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
  background: #0366d6;
  border: 1px solid rgba(209, 213, 218, 0.3);
  border-radius: 4px;

  &:focus {
    box-shadow: 2px -2px 0px #8cc2ff, -2px 2px 0px #8cc2ff, 2px 2px 0px #8cc2ff,
      -2px -2px 0px #8cc2ff;
  }

  &:active {
    border: 1px solid rgba(209, 213, 218, 0.3);
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
