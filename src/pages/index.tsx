/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import Head from "next/head";
import Image from "next/image";
import { Button, Navbar } from "@/components";
import { images } from "@/assets";
import { Typography } from "@/components/typography";

interface HomeResources {
  title: { part1: string; part2: string };
  subtitle: string;
  label: string;
  startButton: string;
  sequence: (string | number)[];
}

export default function Home() {
  const resources: HomeResources = {
    title: { part1: "ReactJs ", part2: "Como Descomplicar o Complexo" },
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
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-center bg-bg shadow-bgShadow">
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
          <h3 className="text-center text-5xl font-semibold text-white md:text-6xl lg:px-[20%] lg:text-7xl">
            <span className="bg-gradient-to-r from-[#4165FF] to-[#7241FF] bg-clip-text font-bold text-transparent">
              {resources.title.part1}
            </span>
            {resources.title.part2}
          </h3>

          {/* Subtitle */}
          <h3 className="mb-8 text-center text-2xl font-light text-grey sm:text-2xl">
            {resources.subtitle}
            <Typography.Animated
              sequence={resources.sequence}
              style="bg-gradient-to-r from-[#4165FF] to-[#7241FF] bg-clip-text font-semibold text-transparent"
            />
          </h3>

          <Button
            label={resources.startButton}
            onClick={() => console.log("hi")}
            animated
          />
        </div>
      </main>
    </>
  );
}
