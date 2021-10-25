import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header({ darkMode, toggleDarkMode }) {
  return (
    <header className="flex justify-center w-full">
      <div className="flex items-center justify-between w-full max-w-screen-2xl">
        <span>
          <a
            href="/"
            className="text-3xl font-extrabold text-gray-700 dark:text-gray-200 px-3 py-2"
          >
            <span>
              <FontAwesomeIcon
                icon={["far", "city"]}
                className="mr-2 text-indigo-600"
              />
              Late Night Luke
            </span>
          </a>
        </span>

        <span className="flex flex-row items-center">
          <button
            className="px-3 py-4 rounded-md text-gray-500 dark:text-gray-400"
            onClick={toggleDarkMode}
          >
            <FontAwesomeIcon
              icon={["far", darkMode ? "moon" : "sun"]}
              className={`${
                darkMode ? "text-yellow-300" : "text-yellow-600"
              } text-2xl`}
            />
          </button>
          <a
            href="https://twitter.com/l8nightluke"
            target="_blank"
            className="px-3 py-4 group"
          >
            <button className="rounded-md text-gray-500 dark:text-gray-100 hover:text-blue-twitter dark:hover:text-blue-twitter">
              <FontAwesomeIcon icon={["fab", "twitter"]} className="text-2xl" />
            </button>
          </a>
          <a
            href="https://github.com/latenightluke"
            target="_blank"
            className="px-3 py-4 group"
          >
            <button className="rounded-md text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              <FontAwesomeIcon icon={["fab", "github"]} className="text-2xl" />
            </button>
          </a>
        </span>
      </div>
    </header>
  );
}
