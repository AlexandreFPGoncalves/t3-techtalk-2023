/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import Head from "next/head";
import Image from "next/image";
import { Button, Navbar } from "@/components";
import { images } from "@/assets";
import { Typography } from "@/components/typography";

interface HomeResources {
  title: { p1: string; p2: string; p3: string };
  subtitle: string;
  label: string;
  startButton: string;
  sequence: (string | number)[];
}

export default function Home() {
  const resources: HomeResources = {
    title: {
      p1: "ReactJs ",
      p2: "como",
      p3: "Descomplicar o Complexo",
    },
    subtitle: "Construí incríveis aplicações full-stack & typesafe com o ",
    label: "Bem-vindo ao TechTalk",
    startButton: "Começar",
    sequence: [
      "ReactJs.",
      2500,
      "NextJs.",
      2500,
      "TypeScript.",
      2500,
      "TailwindCSS.",
      2500,
      "Prisma.",
      2500,
      "NextAuthJs.",
      2500,
      "tRPC.",
    ],
  };

  return (
    <>
      <Head>
        <title>T3 TechTalk 2023</title>
        <meta name="description" content="T3 TechTalk 2023" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="container flex flex-col items-center justify-center gap-3 px-4 py-16 ">
        {/* Label */}
        <div className="flex gap-3">
          <Image
            src={images.stars}
            alt="stars"
            width={26}
            height={26}
            className="ml-4 hidden rounded-full md:flex"
          />
          <p className="bg-gradient-to-r from-[#4165FF] to-[#7241FF] bg-clip-text font-medium tracking-widest text-transparent">
            {resources.label}
          </p>
        </div>

        {/* Title */}
        <h3 className="bold bg-gradient-to-r from-[#4165FF] to-[#7241FF] bg-clip-text text-center text-3xl font-bold text-transparent sm:text-5xl md:text-6xl lg:text-7xl">
          {resources.title.p1}
          <span className=" font-semibold text-white">
            {resources.title.p2}
          </span>
        </h3>
        <h3 className="text-center text-3xl font-semibold text-white sm:text-5xl md:text-6xl lg:text-7xl">
          {resources.title.p3}
        </h3>

        {/* Subtitle */}
        <h3 className="mb-8 text-center text-lg font-light text-grey sm:text-2xl">
          {resources.subtitle}
          <Typography.Animated
            sequence={resources.sequence}
            style="bg-gradient-to-r from-[#4165FF] to-[#7241FF] bg-clip-text font-semibold text-transparent"
          />
        </h3>

        {/* Button */}
        <Button
          label={resources.startButton}
          onClick={() => console.log("test")}
          animated
        />
      </div>
    </>
  );
}
