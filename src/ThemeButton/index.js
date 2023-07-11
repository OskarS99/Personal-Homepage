import { useDispatch, useSelector } from "react-redux";
import { Button, Caption, Wrapper } from "./styled";
import { selectTheme, toggleTheme } from "../themeSlice";
import { ReactComponent as LightThemeButton } from "../SVG/LightButton.svg";
import { ReactComponent as DarkThemeButton } from "../SVG/DarkButton.svg";

export const ThemeButton = () => {
  const dark = useSelector(selectTheme);
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <Caption>
        Dark mode <span>{dark ? "on" : "off"}</span>
      </Caption>
      <Button onClick={() => dispatch(toggleTheme())}>
        {dark ? <DarkThemeButton /> : <LightThemeButton />}
      </Button>
    </Wrapper>
  );
};
