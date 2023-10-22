import { images } from "@/assets";
import { CodeSnippet, Divider, Hero } from "@/components";
import { useNavigationStore } from "@/store";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import Image from "next/image";
import { snippets } from "@/utils/snippets";
import type { ModuleScreen } from "@/utils/types";

export const NextAuthModule = () => {
  const [internalStep, setInternalStep] = useState<number>(0);
  const { currentStep, decrementCurrentStep, incrementCurrentStep } =
    useNavigationStore();

  const resources: ModuleScreen[] = [
    {
      title: "NextAuthJs",
      intro:
        "NextAuth.js é uma biblioteca de autenticação open source para o Next.Js. Esta simplifica a implementação de autenticação nas aplicações, fornecendo um conjunto de utilitários e um fluxo de autenticação flexível",
      description:
        "Suporta vários providers de autenticação, incluindo OAuth, JWT e outros, que facilitam a integração com logins sociais, providers de identidade externos ou com o próprio sistema de autenticação personalizado",
    },
    {
      title: "Instalação",
      intro:
        "Podemos usar vários providers de autenticação, como o Google, Facebook, GitHub, etc. Para configurar um provider, precisamos de obter os IDs de cliente e segredos do serviço respetivo e adicioná-los às variáveis de ambiente",
      description:
        "Para começar, precisamos de instalar a biblioteca NextAuth.js em um projeto Next.js. Para tal podemos fazer isso com o seguinte comando:",
      snippet: snippets.nextauthInstallation,
    },
    {
      title: "Configuração",
      intro:
        "O NextAuth.js requer configuração no projeto Next.js. Cria-se um arquivo chamado next-auth.js na raiz do projeto para definir provedores de autenticação e opções. Aqui está um exemplo de configuração simples:",

      snippet: snippets.nextauthConfiguration,
    },
    {
      title: "Custom Provider",
      intro:
        "O NextAuth.js também suporta autenticação personalizada. Pode-se implementar uma lógica própria de autenticação ao utilizar um provider personalizado",
      snippet: snippets.nextauthCustomProvider,
    },
    {
      title: "Proteção de Rotas",
      intro:
        "Para proteger rotas ou páginas específicas, usamos o middleware de autenticação integrado do NextAuth.js. Por exemplo, em rotas API",
      snippet: snippets.nextauthGetSession,
    },
    {
      title: "Informação do User",
      intro:
        "Com a utilização do NextAuth.Js é possivel e de maneira simples ter acesso às informações do usuário e aos dados da sessão nas páginas Next.Js",
      snippet: snippets.nextauthUserData,
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
      activeStep={{ id: 4, stepName: "NextAuth" }}
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
              src={images.nextauth}
              alt="stars"
              width={327}
              height={361}
              className="animate-float md:flex until-sm:hidden"
            />
          </div>
        </div>
      </motion.div>
    </Hero>
  );
};
