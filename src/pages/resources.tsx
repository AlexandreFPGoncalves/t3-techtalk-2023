import Head from "next/head";
import { Link2Icon, FileTextIcon } from "@radix-ui/react-icons";

interface Resources {
  title: string;
  url: string;
  category: string;
}

export default function Resources() {
  const resouces: Resources[] = [
    {
      title: "CSS Cheatsheet",
      url: "https://google.pt",
      category: "cheatsheet",
    },
  ];

  return (
    <>
      <Head>
        <title>T3 TechTalk 2023</title>
        <meta name="description" content="T3 TechTalk 2023" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="container relative top-20 grid grid-cols-5 gap-4 until-lg:grid-cols-3">
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
            <div className="flex items-center">
              <FileTextIcon />
              <p>{resource.category}</p>
            </div>
          </a>
        ))}

        <div className="h-24 w-52 rounded-2xl bg-bg shadow-purple"></div>
        <div className="h-24 w-52 rounded-2xl bg-bg shadow-purple"></div>
        <div className="h-24 w-52 rounded-2xl bg-bg shadow-purple"></div>
        <div className="h-24 w-52 rounded-2xl bg-bg shadow-purple"></div>
      </div>
    </>
  );
}
