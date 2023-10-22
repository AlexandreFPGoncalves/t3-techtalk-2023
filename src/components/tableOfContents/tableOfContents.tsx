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
      offsetTop={0}
      offsetBottom={50}
      className="flex flex-col rounded-2xl border border-darkblue bg-bg pb-2 text-lg shadow-bgShadow"
    >
      <h3 className="text-md border-b border-darkblue px-4 py-2 font-semibold">
        Table Of Contents
      </h3>
      <div className="pt-2">
        {sections.map((section) => (
          <div className="flex flex-col" key={section.path}>
            <a
              className="px-4 py-1 text-[16px] font-semibold hover:bg-purple/20"
              href={section.path}
            >
              {section.title}
            </a>
            {section.subsections.map((subsection) => (
              <ul key={subsection.path}>
                <li>
                  <a
                    className="block p-2 py-0.5 pl-8 text-[14px] text-grey hover:bg-purple/20"
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
