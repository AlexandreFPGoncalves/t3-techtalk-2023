import StickyBox from "react-sticky-box";

interface TableOfContentsProps {
  sections: {
    title: string;
    path: string;
    subsections: {
      title: string;
      path: string;
    }[];
  }[];
}

export const TableOfContents: React.FC<TableOfContentsProps> = ({
  sections,
}) => {
  return (
    <StickyBox
      offsetTop={100}
      className="z-50 flex flex-col rounded border bg-black pb-2 text-lg shadow-bgShadow"
    >
      <strong className="border-b px-4 py-2 font-bold">
        Table Of Contents
      </strong>
      <div className="pt-2">
        {sections.map((section) => (
          <div className="flex flex-col" key={section.path}>
            <a
              className="p-2 py-1 font-semibold hover:bg-blue/20"
              href={section.path}
            >
              {section.title}
            </a>
            {section.subsections.map((subsection) => (
              <ul key={subsection.path}>
                <li>
                  <a
                    className="block p-2 py-0.5 pl-6 hover:bg-blue/20"
                    href={subsection.path}
                  >
                    {subsection.title}
                  </a>
                </li>
              </ul>
            ))}
          </div>
        ))}
      </div>
    </StickyBox>
  );
};
