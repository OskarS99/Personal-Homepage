import { useDispatch, useSelector } from "react-redux";
import { Button, Caption, Toggle, ButtonToggler } from "./styled";

import { selectTheme, themeToggler } from "../themeSlice";

export const ThemeButton = () => {
  const theme = useSelector(selectTheme);
  const dispatch = useDispatch();

  return (
    <Button onClick={() => dispatch(themeToggler())}>
      <Caption>
        Dark mode <span>{theme.theme === true ? "off" : "on"}</span>
      </Caption>
    </Button>
  );
};
