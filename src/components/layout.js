import Header from "./header";
import Footer from "./footer";
import MobileFooter from "./mobile-footer";
import Meta from "./meta";

import { useSelector } from "react-redux";
import { useMenuItems } from "../hooks";

export default function Layout({ children }) {
  const darkMode = useSelector((state) => state.settings.darkMode);
  const menuItems = useMenuItems();

  return (
    <>
      <Meta />
      <div className={darkMode ? "dark " : ""}>
        <div className="flex flex-col items-center justify-between min-h-screen bg-white dark:bg-black transition-colors duration-200 ease-linear">
          <Header menuItems={menuItems} darkMode={darkMode} />
          <main className="mx-auto">{children}</main>
          <MobileFooter menuItems={menuItems} />
          <Footer />
        </div>
      </div>
    </>
  );
}
