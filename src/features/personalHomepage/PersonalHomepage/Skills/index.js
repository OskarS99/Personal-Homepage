import { List, ListItem, Title, Wrapper } from "./styled";

export const Skills = ({ title, skills }) => (
  <Wrapper>
    <Title>{title}</Title>
    <List>
      {skills.map((skill) => (
        <ListItem key={skill}>{skill}</ListItem>
      ))}
    </List>
  </Wrapper>
);
