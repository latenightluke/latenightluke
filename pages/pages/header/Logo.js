import React from "react";
import Image from "next/image";
import lnlLogo from "../../public/lnl.svg";

export default function Logo() {
  return <Image src={lnlLogo} alt="LNL" />;
}
