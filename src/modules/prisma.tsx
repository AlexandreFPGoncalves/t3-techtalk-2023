import { images } from "@/assets";
import { CodeSnippet, Divider, Hero } from "@/components";
import { useNavigationStore } from "@/store";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import Image from "next/image";
import { ModuleScreen } from "@/utils/types";

export const PrismaModule = () => {
  const [internalStep, setInternalStep] = useState<number>(0);
  const { currentStep, decrementCurrentStep, incrementCurrentStep } =
    useNavigationStore();

  const resources: ModuleScreen[] = [
    {
      title: "Prisma",
      intro:
        "O Prisma é uma camada moderna para aceder e manipular dados de uma base de dados. Este Object-Relational Mapping (ORM) simplifica a interação com as base de dados das aplicações web e mobile. O prisma é projetado para ser usado com o Javascript e Typescript",
      description:
        "Este é uma escolha popular entre desenvolvedores para trabalhar com base de dados relacionais de forma eficiente e segura",
    },
    {
      title: "Type-Safe Queries",
      intro:
        "O Prisma gera tipagens automaticamente com base no seu modelo de base de dados, isto signafica que o desenvolvimento da base de dados é feita de forma segura e sem erros de tipos",
    },
    {
      title: "Database Agnostic",
      intro:
        "O Prisma suporta diferentes tipos de base de dados, como PostgreSQL, MySQL, SQLite e SQL Server, etc. Isto permite  a troca de base de dados sem a necessidade do código da aplicação ser rescrito na totalidade",
    },
    {
      title: "Migrações de Base de Dados",
      intro:
        "O Prisma fornece uma ferramenta de migração que facilita a criação e aplicação de migrações de base de dados para atualizar o schema da base de dados de forma controlada",
    },
    {
      title: "Relações e Modelos",
      intro:
        "É possível definir modelos da base de dados e as suas relações de forma clara e intuitiva no Prisma, com esta facilidade a modelagem de dados e a navegação entre tabelas acaba por se tornar muito mais intuitiva",
    },
    {
      title: "Queries e Mutações",
      intro:
        "O Prisma facilita também na criação de consultas e mutações, recorrendo a uma sintaxe amigável e clara. Este suporta também inúmeras operações avançadas como filtragem, ordenação e paginação",
    },
    {
      title: "Segurança",
      intro:
        "O Prisma ajuda a proteger contra ataques de injeção de SQL, pois gera consultas parametrizadas e evita a concatenação de strings para formar consultas SQL",
    },
    {
      title: "Integração com Frameworks",
      intro:
        "O Prisma é frequentemente usado com frameworks populares, como Express.js, Next.js, e NestJS, tornando-o uma escolha popular para desenvolvimento web",
    },
    {
      title: "Ecossistema",
      intro:
        "O Prisma possui uma comunidade ativa e uma variedade de plugins e extensões para melhorar o fluxo de trabalho e suporte para diferentes cenários durante a fase de desenvolvimento",
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
      activeStep={{ id: 4, stepName: "Prisma" }}
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
              src={images.prisma}
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
