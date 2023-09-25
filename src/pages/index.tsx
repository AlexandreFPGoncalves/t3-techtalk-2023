/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import Head from "next/head";
import Image from "next/image";
import { Button, Hero } from "@/components";
import { images } from "@/assets";
import { Typography } from "@/components/typography";
import Balancer from "react-wrap-balancer";
import { useState } from "react";
import { motion } from "framer-motion";

interface HomeResources {
  title: { p1: string; p2: string };
  subtitle: string;
  label: string;
  startButton: string;
  sequence: (string | number)[];
}

export default function Home() {
  const sequence = [
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
    2500,
  ];

  const resources: HomeResources = {
    title: {
      p1: "ReactJs ",
      p2: "como Descomplicar o Complexo",
    },
    subtitle: "Constroí incríveis aplicações full-stack & typesafe com o ",
    label: "Bem-vindo ao TechTalk",
    startButton: "Começar",
    sequence: sequence,
  };

  const [step, setStep] = useState<number>(1);

  return (
    <>
      <Head>
        <title>T3 TechTalk 2023</title>
        <meta name="description" content="T3 TechTalk 2023" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="container flex flex-col px-4 py-16">
        {step === 1 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col items-center gap-3"
          >
            {/* Label */}
            <div className="flex animate-breath gap-3">
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
            {/* first usage of Balancer, for more info: https://react-wrap-balancer.vercel.app/ */}
            <Balancer>
              <h3 className="bold bg-gradient-to-r from-[#4165FF] to-[#7241FF] bg-clip-text text-center text-3xl font-bold text-transparent sm:text-5xl md:text-6xl lg:text-7xl">
                {resources.title.p1}
                <span className=" font-semibold text-white">
                  {resources.title.p2}
                </span>
              </h3>
            </Balancer>

            {/* Subtitle */}
            <Balancer>
              <h3 className="mb-8 text-center text-lg font-light text-grey sm:text-2xl">
                {resources.subtitle}
                <Typography.Animated
                  sequence={resources.sequence}
                  style="bg-gradient-to-r from-[#4165FF] to-[#7241FF] bg-clip-text font-semibold text-transparent"
                />
              </h3>
            </Balancer>

            {/* Button */}
            <Button
              label={resources.startButton}
              onClick={() => setStep(step + 1)}
              animated
            />
          </motion.div>
        )}

        {step === 2 && <Hero>test</Hero>}
      </div>
    </>
  );
}
