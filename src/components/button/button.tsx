import React from "react";

interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled = false,
}) => {
  return (
    <div className="hover:from-blue hover:to-purple bg-grey hover:shadow-purple rounded-full p-[2px] transition-all hover:bg-gradient-to-r">
      <button
        onClick={onClick}
        disabled={disabled}
        type="button"
        className="bg-bg rounded-full px-6 py-2 text-blue-800 text-white"
      >
        {label}
      </button>
    </div>
  );
};
