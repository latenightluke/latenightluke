import React from "react";
import Head from "next/head";

import { config, dom } from "@fortawesome/fontawesome-svg-core";
import { HOME_OG_IMAGE_URL } from "../lib/constants";
config.autoAddCss = false;

export default function Meta() {
  return (
    <Head>
      {/* Favicons */}
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicons/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicons/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicons/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicons/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicons/safari-pinned-tab.svg"
        color="#000000"
      />
      <link rel="shortcut icon" href="/favicons/favicon.ico" />
      <meta name="msapplication-TileColor" content="#090B10" />
      <meta name="msapplication-config" content="/favicons/browserconfig.xml" />
      <meta name="theme-color" content="#000" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />

      {/* Site Info */}
      <meta
        name="keywords"
        content="front-end, development, UX, UI, design, UX Design, UI Design, Front-End Development"
      />
      <meta name="robots" content="index, follow" />
      <meta name="copyright" content="Late Night Luke 2021" />
      <meta name="language" content="EN" />
      <meta
        name="description"
        content={`My personal blog about Front-End Development and UX Design.`}
      />
      <meta property="og:image" content={HOME_OG_IMAGE_URL} />

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
