import Head from "next/head";

import { Navbar } from "@/components";

export default function Home() {
  return (
    <>
      <Head>
        <title>T3 TechTalk 2023</title>
        <meta name="description" content="T3 TechTalk 2023" />
        <link rel="icon" href="/favicon.jpg" />
      </Head>
      <Navbar />
      <main className="shadow-bgShadow bg-bg flex min-h-screen flex-col items-center justify-center">
        <div className="container flex flex-col items-center justify-center gap-3 px-4 py-16 ">
          <p className="text-center font-light capitalize text-white">label</p>
          <h1 className="text-3xl font-semibold  text-white sm:text-7xl">
            Title
          </h1>
          <h3 className="text-center text-2xl font-light capitalize text-white sm:text-4xl">
            Subtitle
          </h3>
          <div className="flex flex-col items-center gap-2"></div>
        </div>
      </main>
    </>
  );
}
