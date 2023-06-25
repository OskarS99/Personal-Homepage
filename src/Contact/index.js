import { Caption, Link, Post, Text, Wrapper } from "./styled";
import { ReactComponent as IconGitHub } from "../SVG/IconGithub.svg";
import { ReactComponent as IconFb } from "../SVG/IconFb.svg";
import { ReactComponent as IconLinkedIN } from "../SVG/IconLinkedIN.svg";
import { ReactComponent as IconIg } from "../SVG/IconIG.svg";

export const Contact = () => (
  <Wrapper>
    <Caption>Let’s talk!</Caption>
    <Post href="mailto:oskarsiry99@gmail.com">oskarsiry99@gmail.com</Post>
    <Text>
      I’m always open to new projects whenever I have the time. If you have
      <br /> a website, dashboard or mobile app in mind and need some help to
      <br /> make your ideas come to life, feel free to contact me 🤞
    </Text>
    <Link href="https://github.com/OskarS99">
      <IconGitHub />
    </Link>
    <Link>
      <IconFb />
    </Link>
    <Link>
      <IconLinkedIN />
    </Link>
    <Link>
      <IconIg />
    </Link>
  </Wrapper>
);
