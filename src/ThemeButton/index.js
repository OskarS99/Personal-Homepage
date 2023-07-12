import { useDispatch, useSelector } from "react-redux";
import { Button, Caption, LightThemeButton, Wrapper } from "./styled";
import { selectTheme, toggleTheme } from "../themeSlice";

export const ThemeButton = () => {
  const dark = useSelector(selectTheme);
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <Caption>
        Dark mode <span>{dark ? "on" : "off"}</span>
      </Caption>
      <Button onClick={() => dispatch(toggleTheme())}>
        <LightThemeButton move={dark} />
      </Button>
    </Wrapper>
  );
};
