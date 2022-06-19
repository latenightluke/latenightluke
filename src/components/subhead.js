import React from "react";

export default function Subhead({ className, children }) {
  return (
    <p
      className={`text-lg md:text-2xl mt-3 mb-10 text-black dark:text-white ${className}`}
    >
      {children}
    </p>
  );
}
