import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SocialLink({ href, hoverColor, darkHoverColor, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      className="px-3 py-4 group text-gray-600 hover:text-gray-800 dark:text-gray-600 dark:hover:text-gray-400 dark:active:text-indigo-400"
    >
      <button className="rounded-md">
        <FontAwesomeIcon icon={icon} fixedWidth className="text-2xl" />
      </button>
    </a>
  );
}
