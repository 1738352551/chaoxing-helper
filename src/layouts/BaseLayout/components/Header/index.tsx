import ColorModeButton from "./components/ColorModeButton";
import "./index.scss";
import { getCurrentWindow } from "@tauri-apps/api/window";
interface HeaderProps {
  title: string;
}
const Header: React.FC<HeaderProps> = ({ title }: HeaderProps) => {
  const appWindow = getCurrentWindow();
  const applicationClose = () => {
    appWindow.close();
  };
  const applicationMinus = () => {
    appWindow.minimize();
  };

  return (
    <div
      data-tauri-drag-region
      className="header flex items-center justify-between p-2 shadow-lg"
    >
      <div className="header-title">
        <span className="header-title-text text-shadow-color-lightBlue">
          {title}
        </span>
      </div>


      <div className="header-controls flex gap-2">
        <ColorModeButton/>
        <div className="header-controls-minus">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="size-5 hover:text-sky-400 hover:animate-pulse"
            onClick={applicationMinus}
          >
            <path
              fillRule="evenodd"
              d="M4 10a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H4.75A.75.75 0 0 1 4 10Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="header-controls-close" onClick={applicationClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="size-5 hover:text-sky-400 hover:animate-pulse"
          >
            <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Header;
