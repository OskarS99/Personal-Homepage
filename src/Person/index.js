import React from "react";
import {
  Button,
  ButtonLink,
  ButtonText,
  Caption,
  Description,
  Name,
  Photo,
  Wrapper,
} from "./styled";
import { ReactComponent as Message } from "../SVG/Message.svg";
import { ThemeButton } from "../ThemeButton";

export const Header = () => (
  <Wrapper>
    <Photo src={require(`../oskar.jpg`)} alt="Oskar Siry" />
    <ThemeButton />
    <div>
      <Caption>This is</Caption>
      <Name>Oskar Siry</Name>
      <Description>
        👨🏻Im a passionate Frontend Developer in love with React,
        <br />
        currently looking for new job opportunities.
      </Description>
      <ButtonLink href="mailto:oskarsiry99@gmail.com">
        <Button>
          <Message />
          <ButtonText>Hire Me</ButtonText>
        </Button>
      </ButtonLink>
    </div>
  </Wrapper>
);
