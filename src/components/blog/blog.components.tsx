import React from "react";
import { ExternalLinkIcon, BookmarkFilledIcon } from "@radix-ui/react-icons";
import colors from "tailwindcss/colors";

interface SharedComponentProps {
  content: string | React.ReactNode;
  style?: string;
}

interface LinkProps {
  label: string;
  href: string;
  hasIcon?: boolean;
}

export const Section = ({ content, style }: SharedComponentProps) => {
  return (
    <div className={style ? style : "items-bottom flex flex-row gap-2"}>
      <BookmarkFilledIcon color={colors.zinc[400]} />
      <p className={style ? style : "text-sm text-zinc-400"}>{content}</p>
    </div>
  );
};

export const HorizontalDivider = () => {
  return <div className="mt-3 h-[1px] rounded bg-zinc-600"></div>;
};

export const Link = ({ label, href, hasIcon }: LinkProps) => {
  return (
    <a href={href} className={"group w-fit"} target="_blank" rel="noreferrer">
      <div className="flex flex-row items-center gap-1 leading-snug text-violet-400 transition-colors group-hover:text-violet-500">
        {label} {hasIcon && <ExternalLinkIcon className="h-3 w-3" />}
      </div>
    </a>
  );
};
