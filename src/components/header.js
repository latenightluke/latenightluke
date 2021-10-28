import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { toggleDarkMode } from "../app/slices/settings/settingsSlice";
import Logo from "./logo";
import MenuItem from "./menu-item";
import SocialIcon from "./social-icon";

export default function Header({ darkMode, menuItems }) {
  return (
    <header className="bg-black dark:bg-black border-b-2 border-black dark:border-gray-800 w-full">
      <div className="flex justify-between lg:grid lg:grid-cols-3 max-w-screen-2xl mx-auto py-2 px-4">
        <span className="hidden lg:flex items-center justify-start">
          <DarkModeButton darkMode={darkMode} />
          <span className="hidden lg:inline-block">
            {menuItems?.map((item) => (
              <MenuItem key={item?.name} to={item?.pathname} icon={item?.icon}>
                {item?.name}
              </MenuItem>
            ))}
          </span>
        </span>

        <span className="flex items-center justify-center">
          <Logo />
        </span>

        <span className="flex items-center justify-end">
          <SocialIcon
            href="https://twitter.com/l8nightluke"
            icon={["fab", "twitter"]}
          />
          <SocialIcon
            href="https://www.linkedin.com/in/luke-ivie/"
            icon={["fab", "linkedin"]}
          />
          <SocialIcon
            href="https://github.com/latenightluke"
            icon={["fab", "github"]}
          />
          <DarkModeButton darkMode={darkMode} className="lg:hidden" />
        </span>
      </div>
    </header>
  );
}

const DarkModeButton = ({ darkMode, className }) => {
  const dispatch = useDispatch();

  return (
    <button
      className={`group px-3 py-4 rounded-md text-gray-500 dark:text-gray-400 ${className}`}
      onClick={() => dispatch(toggleDarkMode())}
    >
      <FontAwesomeIcon
        icon={darkMode ? ["far", "lightbulb"] : ["fas", "lightbulb-on"]}
        fixedWidth
        className={`${
          darkMode
            ? "text-gray-600 group-hover:text-yellow-300"
            : "text-yellow-300"
        } text-2xl`}
      />
    </button>
  );
};
