import React from "react";
import Head from "next/head";
import { config, dom } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

export default function GlobalHead() {
  return (
    <Head>
      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />

      {/* Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap"
        rel="stylesheet"
      />

      {/* FontAwesome CSS */}
      <style>{dom.css()}</style>
    </Head>
  );
}
