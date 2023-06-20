import { useProjectData } from "../useProjectData";
import { Description, Name, Title, Wrapper } from "./styled";

export const Project = () => {
  const reposData = useProjectData();

  reposData.map((reposElement) => {
    return (
      <Wrapper key={reposElement.id}>
        <Title>{reposElement.name}</Title>

        <Description>{reposElement.description}</Description>
        <Name>
          Demo:<a href="">{reposElement}</a>
        </Name>
        <Name>
          Code:
          <a href={reposElement.html_url}>{reposElement.html_url}</a>
        </Name>
      </Wrapper>
    );
  });
};
