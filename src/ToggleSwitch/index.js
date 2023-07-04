import { useDispatch } from "react-redux";
import { Input, Slider, SunImage, Switch, Toggle } from "./styled";
import { themeToggler } from "../themeSlice";

export const ToggleSwitch = () => {
  const dispatch = useDispatch();

  return (
    <Switch>
      <Input type="checkbox" />
      <Slider onClick={() => dispatch(themeToggler())}></Slider>
    </Switch>
  );
};
