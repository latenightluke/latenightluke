import React from "react";
import Head from "next/head";
import Layout from "../../components/layout";

export default function index() {
  return (
    <Layout>
      <Head>
        <title>Blog | Late Night Luke</title>
      </Head>
      <div className="flex flex-col text-center max-w-screen-xl mx-auto p-6 text-white">
        <h1 className="text-3xl font-bold mb-1">Blog</h1>
        <p className="text-white dark:text-indigo-400 text-xl">Coming Soon</p>
      </div>
    </Layout>
  );
}
