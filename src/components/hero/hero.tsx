import { motion } from "framer-motion";
import React, { useState } from "react";
import { Link, Stepper } from "../../components";
import { TriangleRightIcon, TriangleLeftIcon } from "@radix-ui/react-icons";
import { useNavigationStore } from "@/store";

interface HeroProps {
  children: React.ReactNode;
  onBack?: () => void;
  onNext?: () => void;
  activeStep?: { id: number; stepName?: string };
}

export const Hero: React.FC<HeroProps> = ({
  children,
  onBack,
  onNext,
  activeStep,
}) => {
  const { currentStep, decrementCurrentStep, incrementCurrentStep } =
    useNavigationStore();

  const [contentAnimaFinished, setContentAnimaFinished] =
    useState<boolean>(false);

  return (
    <>
      <motion.div
        animate={{ height: "614px", display: "inline" }}
        transition={{ delay: 0.2 }}
        className={`hidden h-0 w-full self-center rounded-3xl bg-gradient-to-r from-blue to-purple py-[2px]`}
      >
        <motion.div
          animate={{ height: "610px", padding: "1rem" }}
          transition={{ delay: 0.5 }}
          className={"h-0 rounded-3xl bg-bg"}
          onAnimationComplete={() => setContentAnimaFinished(true)}
        >
          {contentAnimaFinished && children}
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 2.2 }}
        className="relative mt-4 flex w-full justify-between"
      >
        <div className="flex  cursor-pointer">
          <Link
            label="Back"
            onClick={
              onBack ? () => onBack() : () => decrementCurrentStep(currentStep)
            }
            leftIcon={<TriangleLeftIcon />}
          />
        </div>
        {activeStep && <Stepper activeStep={activeStep} />}

        <div className="flex cursor-pointer justify-end">
          <Link
            label="Next"
            onClick={
              onNext ? () => onNext() : () => incrementCurrentStep(currentStep)
            }
            rightIcon={<TriangleRightIcon />}
          />
        </div>
      </motion.div>
    </>
  );
};
