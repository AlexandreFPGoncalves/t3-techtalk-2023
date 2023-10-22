import { BlogTypography, CodeSnippet, Divider } from "@/components";
import { Blog, type BlogPostProps } from "@/components";
import { textResources } from "@/utils/resources";
import { snippets } from "@/utils/snippets";
import Head from "next/head";

export default function Documentation() {
  const articles: BlogPostProps[] = [
    {
      title: "ReactJs",
      additionalContent: (
        <div className="mt-2 gap-2">
          {textResources.reactResources.map((resource, i) => (
            <div
              key={i}
              id={resource.title}
              className="flex flex-col gap-3 py-3"
            >
              <BlogTypography.Subtitle content={resource.title} />
              <section>
                <BlogTypography.Text content={resource.intro + "."} />
                <BlogTypography.Text content={resource.description + "."} />
              </section>
              {resource.snippet && <CodeSnippet snippet={resource.snippet} />}
              <Divider />
            </div>
          ))}
        </div>
      ),
    },
    {
      title: "Stack T3",
      description:
        "Esta stack foi desenvolvida pelo Theo um Ex-desenvolvedor da Twitch e atual CEO da Ping.gg, criador de conteúdo, bastante conhecido por diversos posts na plataforma X (Twitter) e Youtube.",
      additionalContent: (
        <div className="mt-2 flex flex-col gap-2">
          <BlogTypography.Text
            content={
              "A “T3 Stack” é uma stack de desenvolvimento web, que nada mais é que a combinação de linguagens de programação, frameworks, librarias e ferramentas para facilitar o desenvolvimento e deploy de software. O objetivo da T3 é ser modular e typesafe sem comprometer a aplicação todas as ferramentas da stack são pensadas de modo a resolverem algum tipo de problema."
            }
          />
          <BlogTypography.Text
            content={
              "Esta tem como peças core o Next.Js, Typescript e Tailwind CSS, estas 3 ferramentas são quase sempre incluidas em todos os projetos, já em certos casos em que esteja a ser desenvolvido algum tipo de backend a stack ainda conta com tRPC, Prisma e NextAuth.js."
            }
          />
          <Divider />
          <BlogTypography.Subtitle content={"Instalação"} />
          <BlogTypography.Text
            content={
              "Para a inicialização de um projeto utilizando a stack T3 é tão simples como correr o seguinte comando em um terminal, Vão ser lançadas algumas questões para melhorar a customização como: nome, type safety, packages, repositório, alias."
            }
          />
          <CodeSnippet snippet={snippets.createT3App} />
        </div>
      ),
      divider: true,
    },
    {
      title: "NextJs",
      additionalContent: (
        <div className="mt-2 gap-2">
          {textResources.nextResources.map((resource, i) => (
            <div
              key={i}
              id={resource.title}
              className="flex flex-col gap-3 py-3"
            >
              <BlogTypography.Subtitle content={resource.title} />
              <section>
                <BlogTypography.Text content={resource.intro + "."} />
                <BlogTypography.Text content={resource.description + "."} />
              </section>
              {resource.snippet && <CodeSnippet snippet={resource.snippet} />}
              <Divider />
            </div>
          ))}
        </div>
      ),
    },
    {
      title: "Typescript",
      additionalContent: (
        <div className="mt-2 gap-2">
          {textResources.typescriptResources.map((resource, i) => (
            <div
              key={i}
              id={resource.title}
              className="flex flex-col gap-3 py-3"
            >
              <BlogTypography.Subtitle content={resource.title} />
              <section>
                <BlogTypography.Text content={resource.intro + "."} />
                <BlogTypography.Text content={resource.description + "."} />
              </section>
              {resource.snippet && <CodeSnippet snippet={resource.snippet} />}
              <Divider />
            </div>
          ))}
        </div>
      ),
    },
    {
      title: "TailwindCSS",
      additionalContent: (
        <div className="mt-2 gap-2">
          {textResources.tailwindResources.map((resource, i) => (
            <div
              key={i}
              id={resource.title}
              className="flex flex-col gap-3 py-3"
            >
              <BlogTypography.Subtitle content={resource.title} />
              <section>
                <BlogTypography.Text content={resource.intro + "."} />
                <BlogTypography.Text content={resource.description + "."} />
              </section>
              {resource.snippet && <CodeSnippet snippet={resource.snippet} />}
              <Divider />
            </div>
          ))}
        </div>
      ),
    },
    {
      title: "NextAuth",
      additionalContent: (
        <div className="mt-2 gap-2">
          {textResources.nextAuthResources.map((resource, i) => (
            <div
              key={i}
              id={resource.title}
              className="flex flex-col gap-3 py-3"
            >
              <BlogTypography.Subtitle content={resource.title} />
              <section>
                <BlogTypography.Text content={resource.intro + "."} />
                <BlogTypography.Text content={resource.description + "."} />
              </section>
              {resource.snippet && <CodeSnippet snippet={resource.snippet} />}
              <Divider />
            </div>
          ))}
        </div>
      ),
    },
    {
      title: "tRPC",
      additionalContent: (
        <div className="mt-2 gap-2">
          {textResources.tRPCResources.map((resource, i) => (
            <div
              key={i}
              id={resource.title}
              className="flex flex-col gap-3 py-3"
            >
              <BlogTypography.Subtitle content={resource.title} />
              <section>
                <BlogTypography.Text content={resource.intro + "."} />
                <BlogTypography.Text content={resource.description + "."} />
              </section>
              {resource.snippet && <CodeSnippet snippet={resource.snippet} />}
              <Divider />
            </div>
          ))}
        </div>
      ),
    },
  ];

  return (
    <>
      <Head>
        <title>T3 TechTalk 2023</title>
        <meta name="description" content="T3 TechTalk 2023" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className="relative top-16 flex h-screen max-h-screen w-full justify-center overflow-y-auto shadow-bgShadow">
        <Blog blogEntries={articles} />
      </main>
    </>
  );
}
