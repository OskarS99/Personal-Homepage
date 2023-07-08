import { useDispatch, useSelector } from "react-redux";
import { Button, Caption, Wrapper } from "./styled";
import { selectDarkTheme, toggleDarkTheme } from "../themeSlice";
import { ReactComponent as LightThemeButton } from "../SVG/LightButton.svg";
import { ReactComponent as DarkThemeButton } from "../SVG/DarkButton.svg";

export const ThemeButton = () => {
  const darkTheme = useSelector(selectDarkTheme);
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <Caption>
        Dark mode <span>{darkTheme.darkTheme ? "on" : "off"}</span>
      </Caption>
      <Button onClick={() => dispatch(toggleDarkTheme())}>
        {darkTheme.darkTheme ? <DarkThemeButton /> : <LightThemeButton />}
      </Button>
    </Wrapper>
  );
};
