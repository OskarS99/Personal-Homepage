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

export const Person = () => (
  <Wrapper>
    <ThemeButton />
    <Photo src={require(`../oskar.jpg`)} alt="Oskar Siry" />
    <div>
      <Caption>This is</Caption>
      <Name>Oskar Siry</Name>
      <Description>
        👨🏻Im a passionate Frontend Developer in love with React, currently
        looking for new job opportunities.
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
