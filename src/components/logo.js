import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function logo() {
  return (
    <Link href="/">
      <a
        href="/"
        className="inline-flex items-center text-gray-900 dark:text-white px-3 py-4 lg:py-4"
      >
        <FontAwesomeIcon
          icon={["fas", "city"]}
          className="mr-3 text-indigo-400 text-2xl"
        />
        <span className="hidden sm:inline-block font-extrabold italic text-3xl">
          LNL
        </span>
      </a>
    </Link>
  );
}
