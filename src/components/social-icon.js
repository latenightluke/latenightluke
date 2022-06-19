import React from "react";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SocialIcon({ href, icon, className }) {
  return (
    <a
      href={href}
      target="_blank"
      className={classNames("inline-flex px-2 py-4 cursor-pointer", {
        "text-gray-600 hover:text-gray-400 active:text-indigo-400": !className,
        [className]: !!className,
      })}
    >
      <FontAwesomeIcon icon={icon} fixedWidth className="text-2xl" />
    </a>
  );
}
