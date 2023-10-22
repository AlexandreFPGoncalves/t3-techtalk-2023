import React from "react";
import { ExternalLinkIcon } from "@radix-ui/react-icons";

interface LinkProps {
  label: string;
  href: string;
  hasIcon?: boolean;
}
interface SharedTypographyProps {
  content: string | React.ReactNode;
  style?: string;
}

export const Link = ({ label, href, hasIcon }: LinkProps) => {
  return (
    <a href={href} className={"group w-fit"} target="_blank" rel="noreferrer">
      <div className="flex flex-row items-center gap-1 leading-snug text-purple transition-colors group-hover:text-violet-500">
        {label} {hasIcon && <ExternalLinkIcon className="h-3 w-3" />}
      </div>
    </a>
  );
};

export const Subtitle = ({ content, style }: SharedTypographyProps) => {
  return (
    <h1 className={style ? style : "text-xl font-bold tracking-wide text-grey"}>
      {content}
    </h1>
  );
};

export const Text = ({ content, style }: SharedTypographyProps) => {
  return (
    <text className={style ? style : "pt-3 indent-1 leading-snug text-grey"}>
      {content}
    </text>
  );
};
