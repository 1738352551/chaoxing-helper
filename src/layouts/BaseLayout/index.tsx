import "./index.scss";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import { useSelector } from "react-redux";
import type { RootState } from "../../stores";
import classNames from "classnames";
const BaseLayout: React.FC = () => {
  const theme = useSelector((state: RootState) => state.settingsReducer.theme);
  console.log(theme);
  return (
    <div id="mainLayout" className={classNames(theme, "text-foreground", "bg-background", "size-screen")}>
      <Header title="超星学习通 - 刷课助手" />
    </div>
  );
};
export default BaseLayout;
