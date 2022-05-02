import React from "react";
import Image from "next/image";
import avatar from "../../public/avatar/luke.jpg";

export default function Avatar() {
  return (
    <div className="h-36 w-36 flex items-center justify-center rounded-full overflow-hidden mb-4 border-4 border-indigo-400">
      <Image placeholder="blur" alt="Late Night Luke" src={avatar}></Image>
    </div>
  );
}
