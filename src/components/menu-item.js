import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function MenuItem({ children, icon, to }) {
  const router = useRouter();

  const active =
    to !== "/" ? router.pathname.includes(to) : router.pathname === to;
  console.log(router.pathname);

  return (
    <Link href={to}>
      <a
        className={`${
          active
            ? "text-indigo-400"
            : "text-gray-600 hover:text-gray-400 active:text-indigo-400"
        } text-xl px-5 py-4`}
      >
        {icon && (
          <FontAwesomeIcon
            icon={[active ? "fas" : "fal", icon]}
            className="mr-2"
          />
        )}
        <span className="hidden lg:inline-flex">{children}</span>
      </a>
    </Link>
  );
}
