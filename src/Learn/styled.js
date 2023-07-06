import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 104px;
  padding: 32px 32px 24px 32px;
  max-width: 1215px;
  background: ${(props) => props.theme.box.color};
  box-shadow: ${(props) => props.theme.box.shadow};
  border-radius: 4px;
`;

export const Title = styled.h2`
  font-style: normal;
  font-weight: 900;
  font-size: 30px;
  line-height: 36px;
  margin: 0;
  letter-spacing: 0.05em;
  color: ${(props) => props.theme.color.header};
  padding-bottom: 18px;
  border-bottom: 1px solid rgba(209, 213, 218, 0.3);
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding-left: 0;
  margin-top: 32px;
  list-style-position: inside;
  list-style: none;

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
