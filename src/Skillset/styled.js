import styled from "styled-components";

export const Box = styled.div`
  margin-top: 63px;
  max-width: 1215px;
  background: ${(props) => props.theme.box.color};
  padding: 32px 32px 24px 32px;
  box-shadow: ${(props) => props.theme.box.shadow};
  border-radius: 4px;

  @media (max-width: 767px) {
    margin-top: 48px;
    margin-inline: 16px;
  }
`;

export const Title = styled.h2`
  margin: 0;
  font-style: normal;
  font-weight: 900;
  font-size: 30px;
  line-height: 36px;
  letter-spacing: 0.05em;
  color: ${(props) => props.theme.color.header};
  border-bottom: 1px solid rgba(209, 213, 218, 0.3);
  padding-bottom: 16px;
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 115px;
  white-space: nowrap;
  padding: 0px;
  margin-top: 32px;
  list-style: none;
  list-style-position: inside;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

export const ListItem = styled.li`
  margin-bottom: 8px;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 140%;
  letter-spacing: 0.05em;
  color: ${(props) => props.theme.color.text};

  &::before {
    content: "•";
    color: #0366d6;
    margin-right: 16px;
    font-size: 30px;
  }
`;
