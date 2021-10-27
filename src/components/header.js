import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { toggleDarkMode } from "../app/slices/settings/settingsSlice";
import Logo from "./logo";
import MenuItem from "./menu-item";
import SocialLink from "./social-link";

export default function Header({ darkMode }) {
  const dispatch = useDispatch();

  return (
    <header className="flex items-center justify-between w-full max-w-screen-2xl">
      <span className="flex items-center">
        <Logo />
        <MenuItem to="/portfolio" icon={["far", "briefcase"]}>
          Portfolio
        </MenuItem>
        <MenuItem to="/blog" icon={["far", "book"]}>
          Blog
        </MenuItem>
        <MenuItem to="/tools-and-tech" icon={["far", "tools"]}>
          Tools & Tech
        </MenuItem>
      </span>

      <span className="flex flex-row items-center">
        <SocialLink
          href="https://twitter.com/l8nightluke"
          icon={["fab", "twitter"]}
        />
        <SocialLink
          href="https://www.linkedin.com/in/luke-ivie/"
          icon={["fab", "linkedin"]}
        />
        <SocialLink
          href="https://github.com/latenightluke"
          icon={["fab", "github"]}
        />
        <button
          className="px-3 py-4 rounded-md text-gray-500 dark:text-gray-400"
          onClick={() => dispatch(toggleDarkMode())}
        >
          <FontAwesomeIcon
            icon={darkMode ? ["far", "lightbulb"] : ["fas", "lightbulb-on"]}
            fixedWidth
            className={`${
              darkMode
                ? "text-gray-600 hover:text-yellow-300"
                : "text-yellow-300"
            } text-2xl`}
          />
        </button>
      </span>
    </header>
  );
}
