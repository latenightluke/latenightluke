import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Button({
  href,
  link,
  icon,
  external,
  className,
  children,
  ...rest
}) {
  const buttonClasses = `px-6 py-2 bg-black active:bg-black dark:bg-indigo-600 dark:hover:bg-indigo-500 dark:active:bg-indigo-600 text-xl rounded-full ${className}`;

  if (link && !external) {
    return (
      <Link href={href}>
        <a className={buttonClasses} {...rest}>
          <Text icon={icon} external={external}>
            {children}
          </Text>
        </a>
      </Link>
    );
  } else if (link && external) {
    return (
      <a className={buttonClasses} href={href} target="_blank" {...rest}>
        <Text icon={icon} external={external}>
          {children}
        </Text>
      </a>
    );
  } else {
    return (
      <button className={buttonClasses} {...rest}>
        <Text icon={icon} external={external}>
          {children}
        </Text>
      </button>
    );
  }
}

const Text = ({ icon, external, children }) => (
  <div className="group flex items-center justify-center">
    <FontAwesomeIcon
      icon={icon}
      className="mr-4 text-indigo-400 dark:text-white"
    />
    <span className="text-white dark:text-white">{children}</span>
    {!external && (
      <FontAwesomeIcon
        icon={["far", "long-arrow-right"]}
        className="text-white dark:text-white ml-2 transition-all ease-in-out duration-200 group-hover:ml-4 group-active:duration-100 group-active:ml-2"
      />
    )}
  </div>
);
