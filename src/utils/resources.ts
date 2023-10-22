import { snippets } from "./snippets";
import { ModuleScreen } from "./types";

const reactResources = [
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

const nextResources: ModuleScreen[] = [
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

const typescriptResources: ModuleScreen[] = [
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

const tailwindResources: ModuleScreen[] = [
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

const prismaResources: ModuleScreen[] = [
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

const nextAuthResources: ModuleScreen[] = [
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

const tRPCResources: ModuleScreen[] = [
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

export const textResources = {
  reactResources,
  nextResources,
  typescriptResources,
  tailwindResources,
  prismaResources,
  nextAuthResources,
  tRPCResources,
};
