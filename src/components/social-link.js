import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SocialLink({ href, hoverColor, darkHoverColor, icon }) {
  return (
    <a href={href} target="_blank" className="px-3 py-4 group">
      <button
        className={`rounded-md text-indigo-400 dark:text-gray-600 hover:text-indigo-200 dark:hover:text-indigo-400`}
      >
        <FontAwesomeIcon icon={icon} className="text-2xl" />
      </button>
    </a>
  );
}
