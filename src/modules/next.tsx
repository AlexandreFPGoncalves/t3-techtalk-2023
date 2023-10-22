import { images } from "@/assets";
import { CodeSnippet, Divider, Hero } from "@/components";
import { useNavigationStore } from "@/store";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import Image from "next/image";
import { snippets } from "@/utils/snippets";
import type { ModuleScreen } from "@/utils/types";

export const NextModule = () => {
  const [internalStep, setInternalStep] = useState<number>(0);
  const { currentStep, decrementCurrentStep, incrementCurrentStep } =
    useNavigationStore();

  const resources: ModuleScreen[] = [
    {
      title: "Next.Js",
      intro:
        "O Next.js é um framework popular do React que facilita a construção de aplicações web rápidas e prontas para produção. Esta oferece várias funcionalidades e otimizações prontas para uso, como renderização do lado do servidor, divisão automática de código e navegação fácil do lado do cliente",
      description:
        "É utilizado por algumas das maiores empresas do mundo, esta ferramenta permite a criação de aplicações full-stack. Usa “blocos de construção” para agilizar a criação de aplicações web. Esta framework pode ser utilizada para desenvolvimento individual ou ser escalado numa grande equipa",
    },
    {
      title: "Server-side Rendering",
      intro:
        "A Renderização do Lado do Servidor (SSR), permite que se renderize componentes React do lado do servidor. Isto melhora o desempenho do carregamento inicial da página e é benéfico para o Otimização para motores de busca (SEO)",
    },
    {
      title: "Divisão Automática de Código",
      intro:
        "O Next.js divide automaticamente o código JavaScript em partes menores. Isso reduz a carga inicial e melhora o desempenho da aplicação",
    },
    {
      title: "Components",
      intro:
        "O Next.js fornece vários componentes para facilitar o desenvolvimento da aplicação",
      description:
        "O component Link do Next por exemplo facilita a navegação do lado do cliente, tornando a construção e a navegação entre páginas mais fáceis",
      snippet: snippets.nextLinkComponent,
    },
    {
      title: "Geração de Site Estático",
      intro:
        "Podem-se gerar arquivos HTML estáticos no momento da construção para partes da aplicação, o que é excelente para sites orientados por conteúdo",
    },
    {
      title: "API Routes",
      intro:
        "O Next.js facilita a criação de rotas de API, que podem ser usadas para funções serverless ou para encontrar dados dentro da aplicação",
    },
    {
      title: "Routing",
      intro:
        "O Next.js utiliza um sistema de roteamento baseado em arquivos, onde arquivos e pastas no diretório de páginas determinam as rotas na aplicação",
    },
    {
      title: "Suporte Integrado para CSS",
      intro:
        "A framework conta também com suporte integrado para CSS-in-JS com styled-components ou mesmo com a importação de arquivos CSS e SCSS para a estilização da aplicação",
    },
    {
      title: "Configuração Zero",
      intro:
        "O Next.js é opinativo e vem com padrões sensatos, porém qualquer funcionalidade da framework pode ser configurada para se enquadrar melhor no objetivo pretendido durante o tempo de desenvolvimento de determina aplicação",
    },
    {
      title: "Configuração de um projeto Next",
      intro:
        "Para a criação e inicialização de um novo projeto utilizando a framework Next.Js podemos seguir os seguintes comandos",
      description:
        "Aqui é criada a nossa aplicação, para a qual navegamos e inicializamos o servidor de desenvolvimento que fica disponível em https://localhost:3000",
      snippet: snippets.createNextApplication,
    },
    {
      title: "Criação de uma página Web",
      intro:
        "Já para o desenvolvimento de uma página web com o uso dos componentes disponibilizados pelo next podemos seguir este exemplo",
      snippet: snippets.nextHomeScreen,
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
      activeStep={{ id: 4 }}
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
              src={images.next}
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
