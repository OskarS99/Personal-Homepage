import { useDispatch, useSelector } from "react-redux";
import { Button, Caption, Wrapper,} from "./styled";
import { selectTheme, themeToggler } from "../themeSlice";
import { ReactComponent as LightThemeButton } from "../SVG/LightButton.svg";
import { ReactComponent as DarkThemeButton } from "../SVG/DarkButton.svg";

export const ThemeButton = () => {
  const theme = useSelector(selectTheme);
  const dispatch = useDispatch();

  return (    
  <Wrapper>
       <Caption>
        Dark mode <span>{theme.theme === true ? "off" : "on"}</span>
      </Caption>
   <Button onClick={() => dispatch(themeToggler())}>
        {theme.theme === true ? <LightThemeButton/> : <DarkThemeButton/>}
     </Button>
   </Wrapper>
  );  
};
