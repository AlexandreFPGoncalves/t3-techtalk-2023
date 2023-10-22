import { CodeSnippet, Divider, Hero } from "@/components";
import { useNavigationStore } from "@/store";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { images } from "@/assets";
import Image from "next/image";
import { snippets } from "../utils/snippets";

interface T3StackResources {
  title: string;
  introduction: {
    intro: string;
    description: string;
    core: string;
  };
  setup: {
    intro: string;
    questions: string;
  };
}

export const T3StackModule: React.FC = () => {
  const [internalStep, setInternalStep] = useState<number>(0);
  const { currentStep, decrementCurrentStep, incrementCurrentStep } =
    useNavigationStore();

  const resources: T3StackResources = {
    title: "Stack T3",
    introduction: {
      intro:
        "Esta stack foi desenvolvida pelo Theo um Ex-desenvolvedor da Twitch e atual CEO da Ping.gg, criador de conteúdo, bastante conhecido por diversos posts na plataforma X (Twitter) e Youtube",
      description:
        "A “T3 Stack” é uma stack de desenvolvimento web, que nada mais é que a combinação de linguagens de programação, frameworks, librarias e ferramentas para facilitar o desenvolvimento e deploy de software. O objetivo da T3 é ser modular e typesafe sem comprometer a aplicação todas as ferramentas da stack são pensadas de modo a resolverem algum tipo de problema.",
      core: "Esta tem como peças core o Next.Js, Typescript e Tailwind CSS, estas 3 ferramentas são quase sempre incluidas em todos os projetos, já em certos casos em que esteja a ser desenvolvido algum tipo de backend a stack ainda conta com tRPC, Prisma e NextAuth.js.",
    },
    setup: {
      intro:
        "Para a inicialização de um projeto utilizando a stack T3 é tão simples como correr o seguinte comando em um terminal:",
      questions:
        "Vão ser lançadas algumas questões para melhorar a customização como: nome, type safety, packages, repositório, alias.",
    },
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
      activeStep={{ id: 3 }}
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
                    <p className="mt-4">{resources.introduction.intro}</p>
                    <Divider />
                    <p>{resources.introduction.description}</p>
                  </>
                ) : (
                  <>
                    <h2 className="bg-gradient-to-r from-white to-lightgrey bg-clip-text text-4xl font-bold text-transparent">
                      {resources.title}
                    </h2>
                    <p className="mt-4">{resources.introduction.core}</p>
                    <Divider />
                    <p className="mt-4">{resources.setup.intro}</p>
                    <CodeSnippet snippet={snippets.createT3App} />
                    <p className="mt-4">{resources.setup.questions}</p>
                  </>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className=" flex h-2/3 w-1/3 justify-center">
            <Image
              src={images.t3Logo}
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
