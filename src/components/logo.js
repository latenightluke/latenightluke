import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function logo() {
  return (
    <Link href="/">
      <a
        href="/"
        className="items-center inline-flex text-white dark:text-gray-200 px-3 py-2"
      >
        <FontAwesomeIcon
          icon={["fas", "saxophone"]}
          className="mr-2 text-yellow-300 text-2xl"
        />
        <span className="font-extrabold italic text-2xl">Late Night</span>
      </a>
    </Link>
  );
}
