import Header from "./header";
import Footer from "./footer";
import Meta from "./meta";

import { useSelector } from "react-redux";

export default function Layout({ children }) {
  const darkMode = useSelector((state) => state.settings.darkMode);

  return (
    <>
      <Meta />
      <div className={darkMode ? "dark " : ""}>
        <div className="flex flex-col justify-between min-h-screen bg-gradient-to-b from-black to-indigo-900 dark:bg-gradient-to-b dark:from-pitchBlack dark:to-gray-900">
          <Header darkMode={darkMode} />
          <main className="mx-auto">{children}</main>
          <Footer />
        </div>
      </div>
    </>
  );
}
