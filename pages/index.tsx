import Head from "next/head";
import type { NextPage } from "next";
import Nav from "../components/Nav";
import Intro from "../components/Intro";
import Work from "../components/Work";
import Projects from "../components/Projects";
import Achievements from "../components/Achievements";
import Skills from "../components/Skills";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Mohit Thakkar</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Nav />

      <main id="top" className="main">
        <Intro />
        <Work />
        <Projects />
        <Achievements />
        <Skills />
      </main>

      <Footer />
    </>
  );
};

export default Home;
