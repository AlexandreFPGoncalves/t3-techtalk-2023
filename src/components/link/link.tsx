import clsx from "clsx";
import React from "react";

interface LinkProps {
  label: string;
  onClick?: () => void;
  href?: string;
  rightIcon?: React.ReactNode;
  leftIcon?: React.ReactNode;
}

export const Link: React.FC<LinkProps> = ({
  label,
  onClick,
  href,
  rightIcon,
  leftIcon,
}) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className={"group w-fit"}
      target="_blank"
      rel="noreferrer"
    >
      <div
        className={clsx(
          `flex items-center font-semibold leading-snug text-grey transition-all group-hover:text-purple group-hover:underline`,
          leftIcon && "translate-x-[-1px]",
          rightIcon && "translate-x-[1px]",
        )}
      >
        {leftIcon} {label} {rightIcon}
      </div>
    </a>
  );
};
