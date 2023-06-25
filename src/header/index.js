import React from "react";
import {
  Button,
  ButtonText,
  Caption,
  Description,
  Name,
  Photo,
  Test,
  Wrapper,
} from "./styled";
import { ReactComponent as Message } from "../SVG/Message.svg";
import { ThemeButton } from "../Vector";

export const Header = () => (
  <Wrapper>
    <Photo src={require(`../oskar.jpg`)} alt="Oskar Siry" />

    <Test>
      <ThemeButton />
      <Caption>This is</Caption>
      <Name>Oskar Siry</Name>
      <Description>
        👨🏻Im a passionate Frontend Developer in love with React,
        <br />
        currently looking for new job opportunities.
      </Description>
      <Button>
        <Message />
        <ButtonText>Hire Me</ButtonText>
      </Button>
    </Test>
  </Wrapper>
);
