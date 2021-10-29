import React from "react";
import Head from "next/head";
import Layout from "../../components/layout";
import PageTitle from "../../components/page-title";

export default function index() {
  return (
    <Layout>
      <Head>
        <title>Blog | Late Night Luke</title>
      </Head>
      <div className="flex flex-col text-center max-w-screen-xl mx-auto p-6 text-gray-900 dark:text-white">
        <PageTitle>Blog</PageTitle>
        <p className="text-gray-200 dark:text-indigo-400 text-xl">
          Coming Soon
        </p>
      </div>
    </Layout>
  );
}
