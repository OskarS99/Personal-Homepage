import styled from "styled-components";

export const ButtonLink = styled.a`
  text-decoration: none;

  font-style: normal;
  font-weight: 600;
  font-size: 20.0584px;
  line-height: 24px;
  color: #ffffff;
  padding: 12px 16px;
  max-width: 168px;
  height: 49px;
  white-space: nowrap;
  transition: background 0.3s, border 0.3s, box-shadow 0.3s;
  background: ${(props) => props.theme.button.color};
  border: ${(props) => props.theme.button.border};
  border-radius: 4px;

  &:focus {
    box-shadow: ${(props) => props.theme.button.focus};
  }

  &:hover {
    box-shadow: ${(props) => props.theme.button.hover};
  }
`;
