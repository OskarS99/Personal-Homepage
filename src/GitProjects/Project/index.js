import { useProjectData } from "../useProjectData";
import { Description, Link, LinkWrapper, Text, Title, Wrapper } from "./styled";

export const Project = () => {
  const [reposData] = useProjectData();

  return reposData.map((reposElement) => (
    <Wrapper key={reposElement.id}>
      <div>
        <Title>{reposElement.name}</Title>
        <Description>{reposElement.description}</Description>
        <LinkWrapper>
          <Text>
            Demo:
            <Link
              href={`https://oskars99.github.io/${reposElement.name}/#/`}
            >{`https://oskars99.github.io/${reposElement.name}/#/`}</Link>
          </Text>
          <Text>
            Code:
            <Link href={reposElement.html_url}>{reposElement.html_url}</Link>
          </Text>
        </LinkWrapper>
      </div>
    </Wrapper>
  ));
};
