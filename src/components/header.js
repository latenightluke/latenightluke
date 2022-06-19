import React from "react";
import Link from "next/link";
import classNames from "classnames";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Logo from "./logo";
import MenuItem from "./menu-item";
import SocialIcon from "./social-icon";
import { toggleDarkMode } from "../app/slices/settings/settingsSlice";

export default function Header({ darkMode, menuItems }) {
  return (
    <header className="bg-black dark:bg-black border-b-2 border-black dark:border-gray-800 w-full">
      <div className="flex justify-between max-w-screen-2xl mx-auto py-2 px-5">
        <span className="items-center hidden lg:flex w-full">
          {menuItems?.map((item) => (
            <MenuItem key={item?.name} to={item?.pathname} icon={item?.icon}>
              {item?.name}
            </MenuItem>
          ))}
        </span>

        <span className="items-center hidden lg:flex">
          <Link href="/">
            <a href="/" className="inline-flex items-center">
              <Logo width={225} height={86} />
            </a>
          </Link>
        </span>

        <span className="flex items-center justify-between lg:justify-end w-full">
          <span className="flex lg:hidden">
            <Link href="/">
              <a href="/" className="inline-flex items-center">
                <Logo width={85} height={33} />
              </a>
            </Link>
          </span>
          <span className="flex items-center justify-end lg:justify-start">
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
            <DarkModeButton darkMode={darkMode} className="ml-3 lg:ml-3" />
          </span>
        </span>
      </div>
    </header>
  );
}

const DarkModeButton = ({ darkMode, className }) => {
  const dispatch = useDispatch();

  return (
    <div
      className={classNames("flex justify-center cursor-pointer", className)}
    >
      <div
        className={classNames(
          "relative w-16 h-8 transition duration-200 ease-linear rounded-full",
          { "bg-indigo-500": !darkMode, "bg-gray-800": darkMode }
        )}
      >
        <label
          htmlFor="toggle"
          className={classNames(
            "cursor-pointer absolute left-0 w-8 h-8 mb-2 transition duration-100 ease-linear transform bg-white border-4 rounded-full",
            {
              "translate-x-full border-indigo-500": !darkMode,
              "translate-x-0 border-gray-800": darkMode,
            }
          )}
        ></label>

        <span
          className={classNames("text-2xl cursor-pointer", {
            "text-black group-hover:text-yellow-300": !darkMode,
            "text-yellow-300": darkMode,
          })}
          style={{
            position: "absolute",
            right: darkMode && "6px",
            left: !darkMode && "6px",
            bottom: darkMode ? "1px" : "2px",
          }}
          onClick={() => dispatch(toggleDarkMode())}
        >
          <FontAwesomeIcon
            icon={darkMode ? ["fas", "moon"] : ["fas", "sunglasses"]}
            fixedWidth
            style={{ fontSize: "18px" }}
          />
        </span>
        <input
          type="checkbox"
          id="toggle"
          name="toggle"
          className="cursor-pointer w-full h-full appearance-none focus:outline-none"
          onClick={() => dispatch(toggleDarkMode())}
        />
      </div>
    </div>
  );
};
