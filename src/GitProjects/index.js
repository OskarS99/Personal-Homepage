import { Project } from "./Project";
import {
  Body,
  ButtonLink,
  Button,
  ErrorDescription,
  ErrorHeader,
  Header,
  LoadingDescription,
  StyledIconDanger,
  StyledIconGit,
  StyledIconSpinner,
  Text,
  Wrapper,
} from "./styled";
import { useProjectData } from "./useProjectData";

export const GitProjects = () => {
  const [reposData] = useProjectData();

  return (
    <Wrapper>
      <StyledIconGit />
      <Header>Portfolio</Header>
      <Text>My recent project</Text>

      {reposData.includes("loading") ? (
        <>
          <div>
            <LoadingDescription>
              Please wait, projects are being loaded...
            </LoadingDescription>
            <StyledIconSpinner />
          </div>
        </>
      ) : reposData.includes("error") ? (
        <>
          <div>
            <StyledIconDanger />
            <ErrorHeader>Ooops! Something went wrong... </ErrorHeader>
            <ErrorDescription>
              Sorry, failed to load Github projects. <br />
              You can check them directly on Github.
            </ErrorDescription>
            <ButtonLink href="https://github.com/OskarS99">
              <Button>Go to Github</Button>
            </ButtonLink>
          </div>
        </>
      ) : (
        <Body>
          <Project />
        </Body>
      )}
    </Wrapper>
  );
};
