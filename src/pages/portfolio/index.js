import React from "react";
import Head from "next/head";
import Layout from "../../components/layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function index() {
  return (
    <Layout>
      <Head>
        <title>Portfolio | Late Night Luke</title>
      </Head>

      <h1 className="text-3xl text-center text-gray-900 dark:text-white font-bold mb-1">
        Portfolio
      </h1>
      <div className="flex flex-col max-w-screen-xl mx-auto p-6">
        <PortfolioCard
          title="Development"
          description="Some of my development work."
        />
        <PortfolioCard
          title="UX Design"
          description="Some of my UX Design work."
        />
        <PortfolioCard
          title="Graphic Design"
          description="Some of my graphic work."
        />
      </div>
    </Layout>
  );
}

const PortfolioCard = ({ title, description }) => {
  return (
    <div className="group bg-indigo-400 text-black rounded-lg p-4 w-full md:w-96 mb-6 cursor-pointer">
      <h1 className="text-2xl font-bold mb-1">
        {title}
        <FontAwesomeIcon
          icon={["far", "long-arrow-right"]}
          className="ml-2 transition-all ease-in-out duration-200 group-hover:ml-4 group-active:duration-100 group-active:ml-2"
        />
      </h1>
      <p className="text-xl">{description}</p>
    </div>
  );
};
