import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function MenuItem({ children, icon, to }) {
  const router = useRouter();
  const active = router.pathname === to;

  return (
    <Link href={to}>
      <a className="group text-xl px-5">
        {/* {icon && (
          <FontAwesomeIcon
            icon={icon}
            className={`mr-2 ${
              active
                ? "text-indigo-400"
                : "text-gray-700 group-hover:text-gray-500"
            }`}
          />
        )} */}
        <span
          className={`${
            active
              ? "text-white"
              : "text-gray-400 group-hover:text-indigo-400 dark:text-gray-500 dark:group-hover:text-indigo-400"
          }`}
        >
          {children}
        </span>
      </a>
    </Link>
  );
}
