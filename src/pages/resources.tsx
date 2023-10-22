import Head from "next/head";
import { Link2Icon, FileTextIcon } from "@radix-ui/react-icons";
import { useSession } from "next-auth/react";

interface Resources {
  title: string;
  url: string;
  category: string;
}

export default function Resources() {
  const { data: sessionData } = useSession();
  const resouces: Resources[] = [
    {
      title: "CSS Cheatsheet",
      url: "https://htmlcheatsheet.com/css/",
      category: "cheatsheet",
    },
    {
      title: "Flex Cheatsheet",
      url: "https://flexbox.malven.co",
      category: "cheatsheet",
    },
    {
      title: "Git Cheatsheet",
      url: "http://git-cheatsheet.com",
      category: "cheatsheet",
    },
    {
      title: "Grid Cheatsheet",
      url: "https://grid.malven.co",
      category: "cheatsheet",
    },
    {
      title: "HTML Cheatsheet",
      url: "https://htmlcheatsheet.com",
      category: "cheatsheet",
    },
    {
      title: "Javascript Cheatsheet",
      url: "https://htmlcheatsheet.com/js/",
      category: "cheatsheet",
    },
    {
      title: "React Cheatsheet",
      url: "https://devhints.io/react",
      category: "cheatsheet",
    },
    {
      title: "SVG 2 JSX",
      url: "https://svg2jsx.com",
      category: "Converters",
    },
    {
      title: "Awwwards",
      url: "https://www.awwwards.com",
      category: "Design Software",
    },
    {
      title: "Color Space",
      url: "https://mycolor.space",
      category: "Design Software",
    },
    {
      title: "ColorSinspo",
      url: "https://colorsinspo.com",
      category: "Design Software",
    },
    {
      title: "CSS Gradient",
      url: "https://cssgradient.io/",
      category: "Design Software",
    },
    {
      title: "Figma",
      url: "https://www.figma.com",
      category: "Design Software",
    },
    {
      title: "Hypercolor",
      url: "https://hypercolor.dev",
      category: "Design Software",
    },
    {
      title: "RemoveBg",
      url: "https://www.remove.bg",
      category: "Design Software",
    },
    {
      title: "Themes vscode",
      url: "https://themes.vscode.one",
      category: "Design Software",
    },
    {
      title: "Firebase",
      url: "https://firebase.google.com",
      category: "Hosting",
    },
    {
      title: "Github Pages",
      url: "https://pages.github.com",
      category: "Hosting",
    },
    {
      title: "Netlify",
      url: "https://www.netlify.com",
      category: "Hosting",
    },
    {
      title: "Icônes",
      url: "https://icones.js.org",
      category: "Icons",
    },
    {
      title: "PhosphorIcons",
      url: "https://phosphoricons.com",
      category: "Icons",
    },
    {
      title: "Radix Icons",
      url: "https://icons.radix-ui.com",
      category: "Icons",
    },
    {
      title: "Build a CRM",
      url: "https://www.freecodecamp.org/news/build-a-crm/",
      category: "Learning",
    },
    {
      title: "Codewell",
      url: "https://www.codewell.cc",
      category: "Learning",
    },
    {
      title: "Fancy Github Profile Readme",
      url: "https://dev.to/creativetim_official/how-to-create-a-fancy-github-profile-with-readme-4b1i",
      category: "Learning",
    },
    {
      title: "FreeCodeCamp",
      url: "https://www.freecodecamp.org/learn",
      category: "Learning",
    },
    {
      title: "Frontend Mentor",
      url: "https://www.frontendmentor.io",
      category: "Learning",
    },
    {
      title: "WorldVectorLogo",
      url: "https://worldvectorlogo.com",
      category: "Logos",
    },
    {
      title: "Tailwind Merge",
      url: "https://www.npmjs.com/package/tailwind-merge",
      category: "Packages",
    },
    {
      title: "Markdown Badges",
      url: "https://github.com/Ileriayo/markdown-badges",
      category: "Programming Languages",
    },
    {
      title: "Framer Motion",
      url: "https://www.framer.com/motion/",
      category: "Programming Languages",
    },
    {
      title: "Mui",
      url: "https://mui.com",
      category: "Programming Languages",
    },
    {
      title: "TailwindCss",
      url: "https://tailwindcss.com",
      category: "Programming Languages",
    },
    {
      title: "Zustand",
      url: "https://zustand-demo.pmnd.rs",
      category: "Programming Languages",
    },
    {
      title: "Codepen",
      url: "https://codepen.io/your-work/",
      category: "Programming Languages",
    },
    {
      title: "Codepen",
      url: "https://codepen.io/your-work/",
      category: "Programming Software",
    },
    {
      title: "CodeSandBox",
      url: "https://codesandbox.io",
      category: "Programming Software",
    },
    {
      title: "Regex101",
      url: "https://regex101.com",
      category: "Programming Software",
    },
    {
      title: "Sublime Text",
      url: "https://www.sublimetext.com",
      category: "Programming Software",
    },
    {
      title: "Visual Studio Code",
      url: "https://code.visualstudio.com",
      category: "Programming Software",
    },
    {
      title: "Bio.Link",
      url: "https://bio.link",
      category: "Social Media Management",
    },
    {
      title: "ContentDrips",
      url: "https://contentdrips.com",
      category: "Social Media Management",
    },
    {
      title: "PixelHunter",
      url: "https://pixelhunter.io",
      category: "Social Media Management",
    },
    {
      title: "PostImage",
      url: "https://postimages.org",
      category: "Social Media Management",
    },
  ];

  return (
    <>
      <Head>
        <title>T3 TechTalk 2023</title>
        <meta name="description" content="T3 TechTalk 2023" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className="relative flex flex-col gap-10">
        <h3 className="bold bg-clip-text text-center text-3xl font-bold text-transparent text-white sm:text-5xl md:text-6xl lg:text-7xl">
          {sessionData?.user
            ? "Resources"
            : "Área Privada, faz Login para visualizar..."}
        </h3>
        {sessionData?.user && (
          <div className="container grid h-[500px] max-h-[500px] grid-cols-5 justify-center gap-6 overflow-y-auto p-3 until-lg:grid-cols-3">
            {resouces.map((resource, i) => (
              <a
                key={i}
                href={resource.url}
                target="_blank"
                className="flex h-24 w-52 flex-col justify-center gap-[2px] rounded-2xl bg-bg p-1 px-2 shadow-purple"
              >
                <div className="flex items-center gap-1">
                  <Link2Icon width={"18px"} height={"18px"} />
                  <p className="text-lg">{resource.title}</p>
                </div>
                <div className="flex items-center gap-1 text-center font-light capitalize text-grey underline">
                  <FileTextIcon />
                  <p className="truncate">{resource.category}</p>
                </div>
              </a>
            ))}
          </div>
        )}
      </main>
    </>
  );
}
