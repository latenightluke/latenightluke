import React from "react";
import Link from "next/link";
import classNames from "classnames";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function MenuItem({ children, icon, to }) {
  const router = useRouter();

  const active =
    to !== "/" ? router.pathname.includes(to) : router.pathname === to;

  return (
    <Link href={to}>
      <a
        className={classNames("text-xl pr-8 py-4", {
          "text-indigo-500 dark:text-indigo-500": active,
          "text-gray-600 hover:text-gray-400 active:text-indigo-500 dark:active:text-indigo-500":
            !active,
        })}
      >
        {icon && (
          <FontAwesomeIcon
            icon={[active ? "fas" : "fal", icon]}
            className="mr-2 inline-block"
          />
        )}
        <span className="hidden lg:inline-flex">{children}</span>
      </a>
    </Link>
  );
}
