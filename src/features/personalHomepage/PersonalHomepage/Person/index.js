import React from "react";
import {
  Caption,
  ContentWrapper,
  Name,
  Photo,
  StyledButtonLink,
  Summary,
  Wrapper,
} from "./styled";
import { email } from "../email";
import OskarSiry from "./oskar.jpg";
import { ReactComponent as Message } from "./Message.svg";

export const Person = () => (
  <Wrapper>
    <Photo src={OskarSiry} alt="Oskar Siry" />
    <ContentWrapper>
      <Caption>This is</Caption>
      <Name>Oskar Siry</Name>
      <Summary>
        👨🏻Im a constantly developing Junior Frontend Developer in love with
        React, currently looking for new job opportunities.
      </Summary>
      <StyledButtonLink href={`mailto:${email}`}>
        <Message />
        Hire Me
      </StyledButtonLink>
    </ContentWrapper>
  </Wrapper>
);
