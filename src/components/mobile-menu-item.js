import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function MobileMenuItem({ children, icon, to }) {
  const router = useRouter();
  const active = router.pathname === to;

  return (
    <Link href={to}>
      <a className="bg-black group flex flex-col flex-grow justify-center items-center text-xl py-3">
        <FontAwesomeIcon
          icon={[active ? "fas" : "fal", icon]}
          className={`${
            active
              ? "text-indigo-400"
              : "text-gray-600 group-hover:text-indigo-400"
          } text-2xl mb-2`}
        />
        <span
          className={`text-base ${
            active ? "text-white" : "text-gray-600 group-hover:text-gray-400"
          }`}
        >
          {children}
        </span>
      </a>
    </Link>
  );
}
