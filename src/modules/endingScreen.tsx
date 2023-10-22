import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import { images } from "@/assets";

interface LeadingPageResources {
  title: string;
}

export const EndingScreenModule: React.FC = () => {
  const resources: LeadingPageResources = {
    title: "Obrigado pela atenção",
  };

  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="flex flex-col items-center gap-3"
      >
        <div className="flex animate-breath gap-3">
          <Image
            src={images.stars}
            alt="stars"
            width={26}
            height={26}
            className="ml-4 hidden rounded-full md:flex"
          />
          <p className="bg-gradient-to-r from-[#4165FF] to-[#7241FF] bg-clip-text font-medium tracking-widest text-transparent">
            {resources.title}
          </p>
        </div>
      </motion.div>
    </div>
  );
};
