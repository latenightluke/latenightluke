import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Switch } from "../../components/forms";

export default function Header({ darkMode, toggleDarkMode }) {
  return (
    <header className="flex justify-center w-full">
      <div className="flex flex-row items-center justify-between max-w-screen-xl">
        <a
          href="/"
          className="text-3xl font-extrabold text-gray-700 dark:text-gray-200 px-3 py-2"
        >
          <span>
            <FontAwesomeIcon
              icon={["far", "moon"]}
              className="mr-2 text-yellow-200"
            />
            Late Night Luke
          </span>
        </a>

        <Switch value={darkMode} onChange={toggleDarkMode} />
        <a
          href="https://github.com/latenightluke"
          target="_blank"
          className="px-3 py-2 group"
        >
          <button className="rounded-md text-gray-400 hover:text-gray-200 px-2 py-1">
            <FontAwesomeIcon icon={["fab", "github"]} className="text-2xl" />
          </button>
        </a>
      </div>
    </header>
  );
}
