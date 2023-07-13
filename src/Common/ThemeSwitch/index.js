import { useDispatch, useSelector } from "react-redux";
import { Button, Caption, ThemeButton, Wrapper } from "./styled";
import { selectIsDarkTheme, toggleTheme } from "../themeSlice";

export const ThemeButton = () => {
  const isDarkTheme = useSelector(selectIsDarkTheme);
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <Caption>
        Dark mode <span>{isDarkTheme ? "on" : "off"}</span>
      </Caption>
      <Button onClick={() => dispatch(toggleTheme())}>
        <ThemeButton move={isDarkTheme} />
      </Button>
    </Wrapper>
  );
};
