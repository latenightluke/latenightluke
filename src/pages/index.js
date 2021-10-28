import Head from "next/head";
import Link from "next/link";
import Emoji from "../components/emoji";
import Layout from "../components/layout";
import Avatar from "../components/avatar";
import Title from "../components/title";
import Subhead from "../components/subhead";
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
          <Title>Late Night Luke</Title>
          <Subhead>
            Hi, I'm a Front-End Developer/UX Designer based out of Arizona.{" "}
            <Emoji symbol="🏜" label="Desert emoji" />
          </Subhead>
          <div className="flex flex-col items-center justify-center lg:flex-row bg-lateNightLukeOg">
            <Button
              href="mailto:inquiries@latenightluke.dev"
              icon={["far", "envelope"]}
              className="mb-3 mr-3"
              link
              external
            >
              Email Me
            </Button>
            <Button
              href="/portfolio"
              icon={["far", "briefcase"]}
              link
              className="mb-3"
            >
              See My Work
            </Button>
          </div>
        </div>
      </Layout>
    </>
  );
}

const Button = ({
  href,
  link,
  icon,
  external,
  className,
  children,
  ...rest
}) => {
  const buttonClasses = `group px-6 py-2 bg-black active:bg-black dark:bg-indigo-400 dark:hover:bg-indigo-500 dark:active:bg-indigo-400 text-xl rounded-full ${className}`;

  if (link && !external) {
    return (
      <Link href={href}>
        <a className={buttonClasses} {...rest}>
          <Text icon={icon} external={external}>
            {children}
          </Text>
        </a>
      </Link>
    );
  } else if (link && external) {
    return (
      <a className={buttonClasses} href={href} target="_blank" {...rest}>
        <Text icon={icon} external={external}>
          {children}
        </Text>
      </a>
    );
  } else {
    return (
      <button className={buttonClasses} {...rest}>
        <Text icon={icon} external={external}>
          {children}
        </Text>
      </button>
    );
  }
};

const Text = ({ icon, external, children }) => (
  <div className="flex items-center justify-center">
    <FontAwesomeIcon
      icon={icon}
      className="mr-4 text-indigo-400 dark:text-black"
    />
    <span className="text-white dark:text-black">{children}</span>
    {!external && (
      <FontAwesomeIcon
        icon={["far", "long-arrow-right"]}
        className="text-white dark:text-black ml-2 transition-all ease-in-out duration-200 group-hover:ml-4 group-active:duration-100 group-active:ml-2"
      />
    )}
  </div>
);
