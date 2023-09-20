import React from "react";
import { TypeAnimation } from "react-type-animation";

interface AnimatedProps {
  sequence: (string | number)[];
  style?: string;
}

export const Animated: React.FC<AnimatedProps> = ({ sequence, style }) => {
  return (
    <TypeAnimation
      className={style}
      sequence={sequence}
      wrapper={"span"}
      speed={1}
      repeat={Infinity}
    />
  );
};
