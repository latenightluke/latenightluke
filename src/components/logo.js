import React from "react";
import Image from "next/image";

import normalLogo from "../../public/logo/normal.svg";
import sunsetLogo from "../../public/logo/sunset.svg";

export default function logo({ width = 100, height = 129 }) {
  return (
    <>
      <span className="hidden dark:flex">
        <Image
          src={normalLogo}
          width={width}
          height={height}
          alt="Late Night Luke"
        />
      </span>
      <span className="flex dark:hidden">
        <Image
          src={sunsetLogo}
          width={width}
          height={height}
          alt="Late Night Luke"
          className="flex dark:hidden"
        />
      </span>
    </>
  );
}
