import React from "react";
import Image from "next/image";
import avatar from "../../public/avatar/luke.jpg";

export default function Avatar() {
  return (
    <div className="h-32 w-32 flex items-center justify-center rounded-full overflow-hidden mb-4 border-2 border-indigo-200">
      <Image src={avatar}></Image>
    </div>
  );
}
