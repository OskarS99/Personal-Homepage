import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 104px;
  padding: 32px 32px 24px 32px;
  max-width: 1215px;
  background: #ffffff;
  box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02),
    0px 16px 58px rgba(9, 10, 51, 0.03);
  border-radius: 4px;
`;

export const Title = styled.h2`
  font-style: normal;
  font-weight: 900;
  font-size: 30px;
  line-height: 36px;
  margin: 0;
  letter-spacing: 0.05em;
  color: #252525;
  padding-bottom: 18px;
  border-bottom: 1px solid #e5e5e5;
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding-left: 0;
  margin-top: 32px;
  list-style-position: inside;
  list-style: none;
`;

export const ListItem = styled.li`
  margin-bottom: 8px;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 140%;
  letter-spacing: 0.05em;
  color: #6e7e91;

  &::before {
    content: "•";
    color: #0366d6;
    margin-right: 16px;
    font-size: 30px;
  }
`;
