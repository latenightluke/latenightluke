import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function MenuItem({ children, icon, to }) {
  const router = useRouter();
  const active = router.pathname === to;

  return (
    <Link href={to}>
      <a
        className={`${
          active
            ? "text-indigo-400"
            : "text-gray-600 hover:text-indigo-400 dark:text-gray-600 dark:hover:text-gray-400 dark:active:text-indigo-400"
        } text-xl px-5 py-4`}
      >
        <span>{children}</span>
      </a>
    </Link>
  );
}
