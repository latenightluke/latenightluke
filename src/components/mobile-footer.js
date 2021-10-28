import React from "react";
import MobileMenuItem from "./mobile-menu-item";

export default function MobileFooter({ menuItems }) {
  return (
    <footer className="fixed bottom-0 lg:hidden text-white bg-black dark:bg-black border-t-2 border-black dark:border-gray-800 w-full flex">
      {menuItems?.map((item) => (
        <MobileMenuItem key={item?.name} to={item?.pathname} icon={item?.icon}>
          {item?.name}
        </MobileMenuItem>
      ))}
    </footer>
  );
}
