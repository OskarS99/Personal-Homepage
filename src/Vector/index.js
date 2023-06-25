import { ReactComponent as ToggleLight } from "../ToggleOff-light.svg";
import { Caption, Wrapper } from "./styled";

export const Vector = () => (
  <Wrapper>
    <Caption> Dark mode off</Caption>
    <ToggleLight />
  </Wrapper>
);