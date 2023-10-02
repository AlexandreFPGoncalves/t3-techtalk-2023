import Head from "next/head";
import { steps } from "@/modules";
import { StepsController } from "@/navigation";

export default function Home() {
  return (
    <>
      <Head>
        <title>T3 TechTalk 2023</title>
        <meta name="description" content="T3 TechTalk 2023" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="container flex flex-col px-4 py-16">
        <StepsController steps={steps} />
      </div>
    </>
  );
}
