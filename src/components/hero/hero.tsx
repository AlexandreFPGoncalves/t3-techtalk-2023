import { motion } from "framer-motion";
import React, { useState } from "react";
import { Link } from "../link";
import { TriangleRightIcon, TriangleLeftIcon } from "@radix-ui/react-icons";

interface HeroProps {
  children: React.ReactNode;
}

export const Hero: React.FC<HeroProps> = ({ children }) => {
  const [animaFinished, setAnimaFinished] = useState<boolean>(false);

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
          onAnimationComplete={() => setAnimaFinished(true)}
        >
          {animaFinished && children}
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 1 }}
        className="mt-4 flex w-full"
      >
        <div className="flex w-1/2">
          <Link label="Back" href="x" leftIcon={<TriangleLeftIcon />} />
        </div>
        <div className="flex w-1/2 justify-end">
          <Link label="Next" href="x" rightIcon={<TriangleRightIcon />} />
        </div>
      </motion.div>
    </>
  );
};
