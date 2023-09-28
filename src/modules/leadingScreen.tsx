/* eslint-disable @typescript-eslint/unbound-method */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import { images } from "@/assets";
import Balancer from "react-wrap-balancer";
import { Button, Typography } from "@/components";
import { useNavigationStore } from "@/store";

interface LeadingPageResources {
  title: { p1: string; p2: string; p3: string };
  subtitle: string;
  label: string;
  startButton: string;
  sequence: (string | number)[];
}

export const LeadingScreen: React.FC = () => {
  const { decrementCurrentStep, incrementCurrentStep } = useNavigationStore();

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

  const resources: LeadingPageResources = {
    title: {
      p1: "ReactJs ",
      p2: "como",
      p3: "Descomplicar o Complexo",
    },
    subtitle: "Constroí incríveis aplicações full-stack & typesafe com o ",
    label: "Bem-vindo ao TechTalk",
    startButton: "Começar",
    sequence: sequence,
  };

  return (
    <div>
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
        <h3 className="bold bg-gradient-to-r from-[#4165FF] to-[#7241FF] bg-clip-text text-center text-3xl font-bold text-transparent sm:text-5xl md:text-6xl lg:text-7xl">
          {resources.title.p1}
          <span className=" font-semibold text-white">
            {resources.title.p2}
          </span>
          <p className=" font-semibold text-white">{resources.title.p3}</p>
        </h3>

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
          onClick={incrementCurrentStep}
          animated
        />
      </motion.div>
    </div>
  );
};
