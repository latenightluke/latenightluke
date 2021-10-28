import Head from "next/head";
import Emoji from "../components/emoji";
import Layout from "../components/layout";
import Avatar from "../components/avatar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
  return (
    <>
      <Layout>
        <Head>
          <title>Late Night Luke</title>
        </Head>
        <div className="flex flex-col items-center justify-center w-full flex-1 text-center px-6 pb-6 md:px-10 md:pb-10">
          <Avatar />
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-200">
            Late Night Luke
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mt-3 mb-10 text-gray-600 dark:text-white">
            Hi, I'm a Front-End Developer/UX Designer based out of Arizona.{" "}
            <Emoji symbol="🏜" label="Desert emoji" />
          </p>
          <div>
            <a
              href="mailto:inquiries@latenightluke.dev"
              className="px-6 py-2 bg-indigo-400 hover:bg-indigo-500 active:bg-indigo-400  text-black hover:text-black text-xl rounded-full" // dark:bg-green-300 dark:hover:bg-green-400 dark:active:bg-green-300 dark:text-black
            >
              <FontAwesomeIcon icon={["far", "envelope"]} className="mr-4" />
              Email Me
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-around max-w-4xl sm:w-full mb-8">
            {/* <a
              href=""
              className="p-6 mt-6 text-left border-2 w-96 rounded-xl
                border-gray-700 hover:border-indigo-600 hover:text-indigo-600 focus:text-indigo-600"
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

            <Link href="/blog">
              <a className="p-6 mt-6 text-left border-gray-700 hover:border-indigo-600 border-2 w-96 rounded-xl hover:text-indigo-600 focus:text-indigo-600">
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
            </Link>

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
                Learn about the man, the myth, the legend, Mr. Late Night Luke.
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
            </a> */}
          </div>
        </div>
      </Layout>
    </>
  );
}
