import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function MenuItem({ children, to }) {
  const router = useRouter();
  const active = router.pathname === to;

  return (
    <Link href={to}>
      <a
        className={`${
          active
            ? "text-white dark:text-indigo-400"
            : "text-indigo-400 hover:text-indigo-200 dark:text-gray-600 dark:hover:text-indigo-400"
        } text-xl px-3`}
      >
        {children}
      </a>
    </Link>
  );
}
