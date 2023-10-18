import { images } from "@/assets";
import { CodeSnippet, Divider, Hero } from "@/components";
import { useNavigationStore } from "@/store";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import Image from "next/image";
import { snippets } from "@/utils/snippets";

interface NextResources {
  title: string;
}

export const NextModule = () => {
  const [internalStep, setInternalStep] = useState<number>(0);
  const { currentStep, decrementCurrentStep, incrementCurrentStep } =
    useNavigationStore();

  const resources: NextResources = {
    title: "NextJs",
  };

  const handleNavigationOnClick = (clickType: "back" | "next") => {
    clickType === "next"
      ? internalStep === 1
        ? incrementCurrentStep(currentStep)
        : setInternalStep(internalStep + 1)
      : internalStep === 0
      ? decrementCurrentStep(currentStep)
      : setInternalStep(internalStep - 1);
  };

  return (
    <Hero
      onNext={() => handleNavigationOnClick("next")}
      onBack={() => handleNavigationOnClick("back")}
      activeStep={3}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="flex h-full justify-center gap-4"
      >
        <div className="flex items-center gap-10 until-md:flex-col">
          <div className="flex w-2/3 flex-col px-3 text-lg font-light tracking-wide text-lightgrey until-md:w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={internalStep ?? "empty"}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="h-full"
              >
                {internalStep === 0 ? (
                  <>
                    <h2 className="bg-gradient-to-r from-white to-lightgrey bg-clip-text text-4xl font-bold text-transparent">
                      {resources.title}
                    </h2>
                  </>
                ) : (
                  <>
                    <h2 className="bg-gradient-to-r from-white to-lightgrey bg-clip-text text-4xl font-bold text-transparent">
                      {resources.title}
                    </h2>
                    <h3>XD</h3>
                  </>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex h-2/3 w-1/3 justify-center">
            <Image
              src={images.robot}
              alt="stars"
              width={397}
              height={310}
              className="animate-float md:flex until-sm:hidden"
            />
          </div>
        </div>
      </motion.div>
    </Hero>
  );
};
