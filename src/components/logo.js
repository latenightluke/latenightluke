import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function logo() {
  return (
    <Link href="/">
      <a
        href="/"
        className="text-2xl font-extrabold italic text-white dark:text-gray-200 px-3 py-2"
      >
        <span>
          <FontAwesomeIcon
            icon={["far", "city"]}
            className="mr-2 text-indigo-400"
          />
          LNL
        </span>
      </a>
    </Link>
  );
}
