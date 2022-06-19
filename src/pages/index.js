import Head from "next/head";
import Emoji from "../components/emoji";
import Layout from "../components/layout";
import Avatar from "../components/avatar";
import Title from "../components/title";
import Subhead from "../components/subhead";
import Button from "../components/button";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Late Night Luke</title>
      </Head>
      <div className="flex flex-col items-center justify-center w-full flex-1 text-center p-6 md:px-10 md:pb-10">
        <Avatar />
        <Title>Late Night Luke</Title>
        <Subhead>
          Hi, I'm a Full-Stack Engineer with a background in UI/UX, based out of
          sunny Arizona. <Emoji symbol="🏜" label="Desert emoji" />
        </Subhead>
        <div className="flex flex-col items-center justify-center lg:flex-row">
          <Button
            href="https://www.linkedin.com/in/luke-ivie/"
            icon={["fab", "linkedin"]}
            className="mb-3 mr-0 lg:mr-3"
            link
            external
          >
            Message Me
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
  );
}
