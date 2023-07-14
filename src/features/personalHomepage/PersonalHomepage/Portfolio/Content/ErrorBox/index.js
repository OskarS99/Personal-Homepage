import {
  ErrorDescription,
  ErrorHeader,
  StyledButtonLink,
  StyledIconDanger,
  Wrapper,
} from "./styled";
import { githubUsername } from "../../githubUsername";
export const ErrorBox = () => {
  return (
    <Wrapper>
      <StyledIconDanger />
      <ErrorHeader>Ooops! Something went wrong... </ErrorHeader>
      <ErrorDescription>
        Sorry, failed to load Github projects. <br />
        You can check them directly on Github.
      </ErrorDescription>
      <StyledButtonLink href={`https://github.com/${githubUsername}`}>
        Go to Github
      </StyledButtonLink>
    </Wrapper>
  );
};
