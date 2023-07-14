import { useDispatch, useSelector } from "react-redux";
import { Button, Text, ThemeButton, Wrapper } from "./styled";
import { selectIsDarkTheme, toggleTheme } from "../themeSlice";

export const ThemeSwitch = () => {
  const isDarkTheme = useSelector(selectIsDarkTheme);
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <Button onClick={() => dispatch(toggleTheme())}>
        <Text>
          Dark mode <span>{isDarkTheme ? "on" : "off"}</span>
        </Text>
        <ThemeButton move={isDarkTheme} />
      </Button>
    </Wrapper>
  );
};
