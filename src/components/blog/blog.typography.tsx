import React from "react";

interface SharedTypographyProps {
  content: string | React.ReactNode;
  style?: string;
}

export const Title = ({ content, style }: SharedTypographyProps) => {
  return (
    <h1 className={style ? style : "text-3xl font-extrabold"}>{content}</h1>
  );
};

export const Subtitle = ({ content, style }: SharedTypographyProps) => {
  return (
    <h1 className={style ? style : "text-2xl font-bold text-zinc-400"}>
      {content}
    </h1>
  );
};

export const Text = ({ content, style }: SharedTypographyProps) => {
  return (
    <text
      className={style ? style : "pt-3 indent-1 leading-snug text-zinc-400"}
    >
      {content}
    </text>
  );
};
