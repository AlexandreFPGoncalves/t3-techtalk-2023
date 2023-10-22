import { CodeSnippet, Divider, Hero } from "@/components";
import { useNavigationStore } from "@/store";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { images } from "@/assets";
import Image from "next/image";
import { snippets } from "../utils/snippets";
import { ModuleScreen } from "@/utils/types";

export const TRPCModule: React.FC = () => {
  const [internalStep, setInternalStep] = useState<number>(0);
  const { currentStep, decrementCurrentStep, incrementCurrentStep } =
    useNavigationStore();

  const resources: ModuleScreen[] = [
    {
      title: "tRPC",
      intro:
        "O tRPC é uma biblioteca de código aberto para construir APIs em Node.js e JavaScript. O nome tRPC significa Typescript Remote Procedure Call",
      description:
        "Esta biblioteca foi projetada para simplificar o desenvolvimento de APIs em aplicações React com TypeScript",
    },
    {
      title: "Tipagem Forte",
      intro:
        "O tRPC utiliza tipagem forte por meio do TypeScript. Isso significa que os tipos de dados são verificados em tempo de compilação, ajudando a evitar erros comuns durante o desenvolvimento",
    },
    {
      title: "Integração com React",
      intro:
        "O tRPC é especialmente voltado para aplicações React. Ele oferece um conjunto de hooks personalizados que facilitam a integração das suas APIs com componentes React",
    },
    {
      title: "Autenticação e Autorização",
      intro:
        "O tRPC suporta autenticação e autorização de maneira flexível. É possível definir políticas de acesso para controlar quem pode acessar cada endpoint",
    },
    {
      title: "Validação de Dados",
      intro:
        "Este oferece suporte à validação de dados que entram e saem, garantindo assim que os estes estejam corretos e seguros",
    },
    {
      title: "Documentação Automática",
      intro:
        "O tRPC gera automaticamente documentação, facilitando assim a integração e entendimento de qualquer desenvolvedor de como utiliza-la",
    },
    {
      title: "Performance",
      intro:
        "O tRPC é projetado para ser eficiente em termos de desempenho, minimizando uses desnecessários e otimizando consultas",
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
      activeStep={{ id: 4, stepName: "tRPC" }}
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
                key={internalStep ? internalStep : "empty"}
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
              src={images.tRPC}
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
