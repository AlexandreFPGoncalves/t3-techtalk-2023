import { images } from "@/assets";
import { CodeSnippet, Divider, Hero } from "@/components";
import { useNavigationStore } from "@/store";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import Image from "next/image";
import { snippets } from "@/utils/snippets";
import type { ModuleScreen } from "@/utils/types";

export const TypeScriptModule = () => {
  const [internalStep, setInternalStep] = useState<number>(0);
  const { currentStep, decrementCurrentStep, incrementCurrentStep } =
    useNavigationStore();

  const resources: ModuleScreen[] = [
    {
      title: "Typescript",
      intro:
        "O Javascript é uma terra sem grandes regras, podemos referenciar variáveis que não existem ou até mesmo trabalhar com objetos sem forma definida, o código é então interpretado por um browser, mas caso exista algum erro só vai ser descoberto quando a aplicação estiver a correr, o Typescript previne estes erros de sequer acontecerem estendendo o Javascript com tipagens",
      description:
        "Tipagens estas que fazem parte do superset que é um conjunto de ferramentas montado em cima do Javascript onde são devolvidas tipagens estáticas, parâmetros e retornos",
      snippet: snippets.typescriptErrors,
    },
    {
      title: "Configuração",
      intro:
        "O Typescript permite também, através do ficheiro tsconfig, criar uma experiência única de utilização para cada projeto e desenvolvedor modificando as regras de utilização do mesmo",
      description:
        "Uma das funcionalidades principais do Typescript é a tipagem estática que conta com explicit e implicit types",
      snippet: snippets.typescriptStaticTypes,
    },
    {
      title: "Utilização do Typescript",
      intro:
        "Neste pequeno exemplo podemos ver a diferença de dois componentes onde um tem acesso a tipagem definida por nós e algumas props são marcadas como sendo obrigatórias",
      snippet: snippets.typescriptExample,
    },
  ];

  const handleNavigationOnClick = (clickType: "back" | "next") => {
    clickType === "next"
      ? internalStep === resources.length - 1
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
      activeStep={{ id: 4, stepName: "Typescript" }}
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
                <h2 className="bg-gradient-to-r from-white to-lightgrey bg-clip-text text-4xl font-bold text-transparent">
                  {resources[internalStep]?.title}
                </h2>
                <p className="mt-4">{resources[internalStep]?.intro}</p>
                {resources[internalStep]?.description && (
                  <>
                    <Divider />
                    <p className="mt-4">
                      {resources[internalStep]?.description}
                    </p>
                  </>
                )}
                {!!resources[internalStep]?.snippet && (
                  <CodeSnippet
                    snippet={resources[internalStep]?.snippet ?? ""}
                  />
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex h-2/3 w-1/3 justify-center">
            <Image
              src={images.typescript}
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
