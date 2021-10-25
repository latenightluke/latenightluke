import Head from "next/head";
import Logo from "./header/Logo";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black">
      <Head>
        <title>Late Night Luke</title>
        <link rel="icon" href="/favicon.ico" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap"
          rel="stylesheet"
        />
        <script
          src="https://kit.fontawesome.com/4258eaa5be.js"
          crossorigin="anonymous"
        ></script>
      </Head>

      <header className="flex flex-row items-start justify-between w-full border-b border-gray-800">
        <a
          href="/"
          className="text-4xl font-extrabold italic text-gray-200 px-3 py-2"
        >
          <span>
            <span className="fal fa-moon pr-2 text-yellow-200"></span>
            LNL
          </span>
        </a>

        <a
          href="https://github.com/latenightluke"
          target="_blank"
          className="px-3 py-2 group"
        >
          <button className="rounded-md text-gray-400 hover:text-gray-200 px-2 py-1">
            <i className="fab fa-github text-2xl"></i>
          </button>
        </a>
      </header>

      <main className="flex flex-col items-center justify-center w-full flex-1 text-center text-gray-200">
        <div className="px-6 pb-6 md:px-10 md:pb-10">
          <h1 className="text-3xl sm:text-5xl font-bold">
            <i className="far fa-city text-indigo-600"></i> Late Night Luke
          </h1>
          <p className="mt-3 text-2 sm:text-2xl">
            Hi, I'm a Front-End Developer/UX Designer based out of Arizona. 🏜
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-around max-w-4xl sm:w-full mb-8">
          <a
            href="https://nextjs.org/docs"
            className="p-6 mt-6 text-left border-gray-700 hover:border-indigo-600 border-2 w-96 rounded-xl hover:text-indigo-600 focus:text-indigo-600"
          >
            <h3 className="text-2xl font-bold">
              Portfolio
              <i className="far fa-long-arrow-alt-right ml-2"></i>
            </h3>
            <p className="mt-4 text-xl">
              Check out some of my past work and greatest acheivements.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn"
            className="p-6 mt-6 text-left border-gray-700 hover:border-indigo-600 border-2 w-96 rounded-xl hover:text-indigo-600 focus:text-indigo-600"
          >
            <h3 className="text-2xl font-bold">
              Blog
              <i className="far fa-long-arrow-alt-right ml-2"></i>
            </h3>
            <p className="mt-4 text-xl">
              Learn about the frameworks and libraries I love most.
            </p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className="p-6 mt-6 text-left border-gray-700 hover:border-indigo-600 border-2 w-96 rounded-xl hover:text-indigo-600 focus:text-indigo-600"
          >
            <h3 className="text-2xl font-bold">
              About Me<i className="far fa-long-arrow-alt-right ml-2"></i>
            </h3>
            <p className="mt-4 text-xl">
              Learn about the man, the myth, the legend, Mr. Late Night Luke.
            </p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className="p-6 mt-6 text-left border-gray-700 hover:border-indigo-600 border-2 w-96 rounded-xl hover:text-indigo-600 focus:text-indigo-600"
          >
            <h3 className="text-2xl font-bold">
              Tools & Tech<i className="far fa-long-arrow-alt-right ml-2"></i>
            </h3>
            <p className="mt-4 text-xl">
              Learn about my skillset, and my favorite tools and libraries.
            </p>
          </a>
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-10 border-gray-800 border-t text-gray-700">
        &copy; Late Night Luke 2021
      </footer>
    </div>
  );
}
