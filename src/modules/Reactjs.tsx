/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/unbound-method */
/* eslint-disable @next/next/no-img-element */
import { CodeSnippet, Divider, Hero } from "@/components";
import { useNavigationStore } from "@/store";
import { motion } from "framer-motion";
import { useState } from "react";
import { images } from "@/assets";
import Image from "next/image";

interface ReactJsResources {
  title: string;
  copy1: string;
  copy2: string;
}

export const Reactjs: React.FC = () => {
  const [internalStep, setInternalStep] = useState<number>(0);
  const { currentStep, decrementCurrentStep, incrementCurrentStep } =
    useNavigationStore();

  const resources: ReactJsResources = {
    title: "Introdução ao React.JS",
    copy1:
      "O React é uma biblioteca de Javascript que facilita a criação de UIs interativas. Desenvolvido pelo Facebook com lançamento em 2013, tem vindo a ser um dos destaques mais influentes do mercado atual. React History.",
    copy2:
      "A simplicidade do ReactJs é que criar um componente é tão simples como escrever uma função de Javascript. Ajuda no design de cada state da nossa aplicação. O React também vai eficientemente atualizar e renderizar somente os componentes desejados de acordo com certas alterações.",
  };

  const handleBackOnClick = (clickType: "back" | "next") => {
    clickType === "next"
      ? internalStep === 4
        ? incrementCurrentStep(currentStep)
        : setInternalStep(internalStep - 1)
      : internalStep === 0
      ? decrementCurrentStep(currentStep)
      : setInternalStep(internalStep - 1);
  };

  const NamedExportButtonSyntax = `export const NamedExportButton = ({ label, onClick }) => {
  return (
    <div className="...">
      <button onClick={onClick} className="...">{label}</button>
    </div> 
    ); 
  };`;

  return (
    <Hero onNext={() => handleBackOnClick("next")}>
      <motion.div
        initial="hidden"
        animate="show"
        transition={{ delay: 0.75 }}
        className="flex h-full justify-center gap-4"
      >
        <div className="flex items-center gap-10 until-md:flex-col">
          <div className="flex w-2/3 flex-col gap-2 px-3 text-lg font-light tracking-wide text-lightgrey until-md:w-full">
            <span className=" mb-8 bg-gradient-to-r from-white to-lightgrey bg-clip-text text-4xl font-bold text-transparent">
              {resources.title}
            </span>
            <h3>{resources.copy1}</h3>
            <Divider />
            <h3>{resources.copy2}</h3>
          </div>

          <div className=" flex w-1/3 justify-center">
            <Image
              src={images.robot}
              alt="stars"
              width={397}
              height={310}
              className="animate-float rounded-full md:flex until-sm:hidden"
            />
          </div>
        </div>
      </motion.div>
    </Hero>
  );
};
