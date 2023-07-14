import { useDispatch, useSelector } from "react-redux";
import {
  fetchRepositories,
  selectRepositories,
  selectRepositoriesStatus,
} from "../../personalHomepageSlice";
import { githubUsername } from "./githubUsername";
import { useEffect } from "react";
import { Header, Section, StyledIconGit, Text } from "./styled";
import { Content } from "./Content";

export const Portfolio = () => {
  const dispatch = useDispatch();

  const repositoriesStatus = useSelector(selectRepositoriesStatus);
  const repositories = useSelector(selectRepositories);

  useEffect(() => {
    dispatch(fetchRepositories(githubUsername));
  }, [dispatch]);

  return (
    <Section>
      <StyledIconGit />
      <Header>Portfolio</Header>
      <Text>My recent project</Text>

      <Content repositories={repositories} status={repositoriesStatus} />
    </Section>
  );
};
