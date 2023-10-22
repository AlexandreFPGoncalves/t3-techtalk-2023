import { images } from "@/assets";
import { CodeSnippet, Divider, Hero } from "@/components";
import { useNavigationStore } from "@/store";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import Image from "next/image";
import { snippets } from "@/utils/snippets";
import { ModuleScreen } from "@/utils/types";

export const TailwindCssModule = () => {
  const [internalStep, setInternalStep] = useState<number>(0);
  const { currentStep, decrementCurrentStep, incrementCurrentStep } =
    useNavigationStore();

  const resources: ModuleScreen[] = [
    {
      title: "TailwindCSS",
      intro:
        "O TailwindCSS é uma framework de design para criação de UI responsivas e modernas para projetos web. Ao contrário do Bootstrap que oferece componentes, este fornece classes utilitárias de baixo nível que podem ser aplicadas diretamente aos elementos HTML",
      description:
        "Classes estas que cobrem desde espaçamento e tipografia até cores e posicionamento, desta forma, estilizar o conteúdo é muito mais eficiente e flexível",
    },
    {
      title: "Classes Utilitárias",
      intro:
        "Como referido anteriormente a framework oferece uma variedade de classes utilitárias que podem ser aplicadas diretamente aos elementos HTML",
      snippet: snippets.tailwindcssClasses,
    },
    {
      title: "Responsividade",
      intro:
        "A framework possui classes responsivas que permitem ajustar a estilização dependentemente do tamanho do ecrã no qual a aplicação esta a ser renderizada",
      snippet: snippets.tailwindcssResponsiveness,
    },
    {
      title: "Plugins",

      intro:
        "O Tailwind CSS possui um rico ecossistema de plugins e extensões que podem ser adicionados para melhorar a sua funcionalidade. Por exemplo, o plugin oficial Tailwind CSS Typography fornece um conjunto de classes relacionadas à tipografia.",
      description:
        "Existem diversos plugins criados pela comunidade que adicionam recursos extras, como estilos de terceiros e animações, para usar um plugin, bastante fazer a instalação do mesmo e adiciona-lo ao ficheiro tailwind.config.js na secção de plugins",
    },
    {
      title: "Bibliotecas de Componentes",
      intro:
        "Embora o Tailwind CSS não ofereça componentes prontos a utilizar, é possível usar algumas bibliotecas de componentes como o TailwindUI ou a DaisyUI",
    },
    {
      title: "Configuração",
      intro:
        "O Tailwind é altamente configurável. Os desenvolvedores podem personalizar as classes já existentes ou estender os seus próprios estilos para facilitar no desenvolvimento da aplicação",
      snippet: snippets.tailwindcssConfig,
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
      activeStep={{ id: 4, stepName: "TailwindCSS" }}
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
              src={images.tailwindcss}
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
