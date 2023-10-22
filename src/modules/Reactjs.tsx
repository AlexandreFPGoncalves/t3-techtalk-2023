import { CodeSnippet, Divider, Hero } from "@/components";
import { useNavigationStore } from "@/store";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { images } from "@/assets";
import Image from "next/image";
import { snippets } from "../utils/snippets";

interface ReactJsResources {
  title: string;
  intro: string;
  description?: string;
  snippet?: string;
}

export const ReactjsModule: React.FC = () => {
  const [internalStep, setInternalStep] = useState<number>(0);
  const { currentStep, decrementCurrentStep, incrementCurrentStep } =
    useNavigationStore();

  const resources: ReactJsResources[] = [
    {
      title: "React.JS",
      intro:
        "O React é uma biblioteca de Javascript que facilita a criação de UIs interativas. Desenvolvido pelo Facebook com lançamento em 2013, tem vindo a ser um dos destaques mais influentes do mercado atual",
      description:
        "O maior destaque do React é que a criação de componentes é tão simples como escrever uma função de Javascript, este também atualiza e renderiza de forma eficiente somente os componentes desejados",
    },
    {
      title: "JSX & DataFlow",
      intro:
        "Esta lib é escrita em .jsx, uma extensão de sintaxe do Javascript. Esta é a junção do JS e XML. É basicamente a renderização do Javascript, mas com a estrutura do XML. O React é então compilado para dentro do React.CreateElement o que basicamente mostra que o React Esta a criar elementos por debaixo dos panos",
      description:
        "O data flow é uni-direcional, como o React tem uma relação de componentes pai para filho, passamos os dados de cima para baixo, isto através de props",
    },
    {
      title: "States",
      intro:
        "O React faz uso de states internos, neste caso o useState, este retorna um valor e uma função para atualizar o mesmo, counter → Read e setCounter → Write. Ao ser utilizado o counter vai sempre mostrar o seu valor mais recente e sempre que o botão for clicado o react vai reagir a esse evento",
      snippet: snippets.reactCounterSnippet,
    },
    {
      title: "Event Loop",
      intro:
        "Neste contexto o Event Loop é responsável por gerenciar as atualizações da UI de forma eficiente. Quando uma ação é disparada, como o clique do botão, o React adiciona a tarefa de atualização à fila de eventos e aguarda a sua vez na fila para ser executada",
      description:
        "Isso permite que outras tarefas importantes, como a renderização da interface, sejam realizadas sem serem interrompidas. Por fim o valor do counter vai ser rescrito, logo vai ser dispoletado um re-render desse estado e mostrado o valor mais atual do mesmo na DOM",
    },
    {
      title: "Virtual DOM",
      intro:
        "Esta é a reconstrução virtual da aplicação que é então comparada com o estado real da mesma e onde vai ser somente atualizada a parte que foi alterada, acelerando assim qualquer alteração na aplicação",
      description:
        "Este processo de reconstrução somente da parte alterada é conhecido como uma renderização",
    },
    {
      title: "Garbage Collector",
      intro: `O Garbage Collector é uma característica do React que se encarrega de libertar memória de componentes que já não são necessários. Ele identifica componentes que foram descartados e remove as suas referências da memória, o que evita o acúmulo de "lixo" e otimiza o desempenho da aplicação`,
    },
    {
      title: "Vantagens",
      intro:
        "A curva de aprendizagem do React em comparação a outras frameworks é muito menor, isto deve-se ao facto da sintaxe do React ser clara e fácil de interpretar, para além da questão da performance ser muito mais eficiente que qualquer um dos concorrentes",
      description:
        "O React conta também com uma grande comunidade open source para qualquer problema encontrado na fase de desenvolvimento. É também muito mais simples a transição para o ReactNative. Outra grande vantagem da utilização do React é a facilidade de transição para o ReactNative que nos permite começar a construir aplicações mobile",
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
      activeStep={{ id: 2 }}
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
              src={images.robot}
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
