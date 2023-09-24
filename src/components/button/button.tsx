import clsx from "clsx";
import React from "react";

interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  animated?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled = false,
  animated = false,
}) => {
  return (
    <div
      className={clsx(
        `rounded-full bg-grey p-[2px] transition-all hover:bg-gradient-to-r`,
        disabled
          ? "cursor-not-allowed opacity-60 hover:from-grey hover:to-blue"
          : "hover:from-blue hover:to-purple hover:shadow-purple",
        animated && "animate-breath",
      )}
    >
      <button
        onClick={onClick}
        disabled={disabled}
        type="button"
        className={clsx(
          "rounded-full bg-bg px-6 py-2",
          disabled ? "cursor-not-allowed text-grey" : "text-white",
        )}
      >
        {label}
      </button>
    </div>
  );
};
