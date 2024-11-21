import { Button } from "@nextui-org/button";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/stores";
import LightIcon from "./LightIcon";
import DarkIcon from "./darkIcon";
import { toggleTheme } from "@/stores/settings";
/**
 * 颜色模式设置按钮
 * 调节灯光模式
 * 暗色/亮色
 */
const ColorModeButton: React.FC = () => {
  const theme = useSelector((state: RootState) => state.settingsReducer.theme);
  const dispatch = useDispatch();
  return (
    <Button isIconOnly size="sm" onClick={()=> dispatch(toggleTheme())}>
      {theme === "light" && <LightIcon />}
      {theme === "dark" && <DarkIcon />}
    </Button>
  );
};

export default ColorModeButton;
