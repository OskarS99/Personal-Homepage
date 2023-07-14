import {
  Body,
  Description,
  Link,
  LinkWrapper,
  Text,
  Title,
  Wrapper,
} from "./styled";

export const Repositories = ({ repositories }) => {
  return (
    <Wrapper>
      {repositories.map(({ id, name, description, html_url }) => (
        <Body key={id}>
          <Title>{name}</Title>
          <Description>{description}</Description>
          <LinkWrapper>
            <Text>
              Demo:
              <Link
                href={`https://oskars99.github.io/${name}/#/`}
              >{`https://oskars99.github.io/${name}/#/`}</Link>
            </Text>
            <Text>
              Code:
              <Link href={html_url}>{html_url}</Link>
            </Text>
          </LinkWrapper>
        </Body>
      ))}
    </Wrapper>
  );
};
