import {
  Address,
  Caption,
  Email,
  Link,
  StyledIconFb,
  StyledIconGithub,
  StyledIconIg,
  StyledIconLinkedIN,
  Text,
  Wrapper,
} from "./styled";

import { email } from "../email";

export const Footer = () => (
  <Wrapper>
    <Caption>Let’s talk!</Caption>
    <Address>
      <Email href={`mailto:${email}`}>oskarsiry99@gmail.com</Email>
      <Text>
        I’m always open to new projects whenever I have the time. If you have a
        website, dashboard or mobile app in mind and need some help to make your
        ideas come to life, feel free to contact me 🤞
      </Text>
      <Link href="https://github.com/OskarS99">
        <StyledIconGithub />
      </Link>
      <Link href="https://www.messenger.com/t/100003052069252/">
        <StyledIconFb />
      </Link>
      <Link href="https://www.linkedin.com/in/oskar-siry-89743b263/">
        <StyledIconLinkedIN />
      </Link>
      <Link href="https://www.instagram.com/oskarro_99/">
        <StyledIconIg />
      </Link>
    </Address>
  </Wrapper>
);
