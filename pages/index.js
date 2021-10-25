import Head from "next/head";
import { Header } from "./pages/header";
import GlobalHead from "./pages/global-head/GlobalHead";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocalStorage } from "./hooks";

export default function Home() {
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", false);

  function toggleDarkMode() {
    setDarkMode(!darkMode);
  }

  return (
    <>
      <GlobalHead />
      <Head>
        <title>Late Night Luke</title>
      </Head>

      <div className={darkMode ? "dark " : ""}>
        <div className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-black">
          <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

          <main className="flex flex-col items-center justify-center w-full flex-1 text-center text-gray-800 dark:text-gray-200">
            <div className="px-6 pb-6 md:px-10 md:pb-10">
              <h1 className="text-3xl sm:text-5xl font-bold">
                Late Night Luke
              </h1>
              <p className="mt-3 text-2 sm:text-2xl">
                Hi, I'm a Front-End Developer/UX Designer based out of Arizona.
                🏜
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-around max-w-4xl sm:w-full mb-8">
              <a
                href=""
                className="p-6 mt-6 text-left border-gray-700 hover:border-indigo-600 border-2 w-96 rounded-xl hover:text-indigo-600 focus:text-indigo-600"
              >
                <h3 className="text-2xl font-bold">
                  Portfolio
                  <FontAwesomeIcon
                    icon={["far", "long-arrow-alt-right"]}
                    className="ml-2"
                  />
                </h3>
                <p className="mt-4 text-xl">
                  Check out some of my past work and greatest acheivements.
                </p>
              </a>

              <a
                href=""
                className="p-6 mt-6 text-left border-gray-700 hover:border-indigo-600 border-2 w-96 rounded-xl hover:text-indigo-600 focus:text-indigo-600"
              >
                <h3 className="text-2xl font-bold">
                  Blog
                  <FontAwesomeIcon
                    icon={["far", "long-arrow-alt-right"]}
                    className="ml-2"
                  />
                </h3>
                <p className="mt-4 text-xl">
                  Learn about the frameworks and libraries I love most.
                </p>
              </a>

              <a
                href=""
                className="p-6 mt-6 text-left border-gray-700 hover:border-indigo-600 border-2 w-96 rounded-xl hover:text-indigo-600 focus:text-indigo-600"
              >
                <h3 className="text-2xl font-bold">
                  About Me
                  <FontAwesomeIcon
                    icon={["far", "long-arrow-alt-right"]}
                    className="ml-2"
                  />
                </h3>
                <p className="mt-4 text-xl">
                  Learn about the man, the myth, the legend, Mr. Late Night
                  Luke.
                </p>
              </a>

              <a
                href=""
                className="p-6 mt-6 text-left border-gray-700 hover:border-indigo-600 border-2 w-96 rounded-xl hover:text-indigo-600 focus:text-indigo-600"
              >
                <h3 className="text-2xl font-bold">
                  Tools & Tech
                  <FontAwesomeIcon
                    icon={["far", "long-arrow-alt-right"]}
                    className="ml-2"
                  />
                </h3>
                <p className="mt-4 text-xl">
                  Learn about my skillset, and my favorite tools and libraries.
                </p>
              </a>
            </div>
          </main>

          <footer className="flex items-center justify-center w-full py-3 text-gray-400 dark:text-gray-700">
            &copy; Late Night Luke 2021
          </footer>
        </div>
      </div>
    </>
  );
}
