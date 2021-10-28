import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SocialIcon({ href, icon, className }) {
  return (
    <a
      href={href}
      target="_blank"
      className={`px-3 py-4 cursor-pointer ${
        className
          ? className
          : "text-gray-600 hover:text-gray-400 active:text-indigo-400"
      }`}
    >
      <FontAwesomeIcon icon={icon} fixedWidth className="text-2xl" />
    </a>
  );
}
