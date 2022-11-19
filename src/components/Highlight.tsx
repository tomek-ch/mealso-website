import { ReactNode } from "react";

interface HighlightProps {
  children: ReactNode;
}

export const Highlight = ({ children }: HighlightProps) => {
  return (
    <span
      className="relative inline-block
      before:content-[''] before:block before:absolute
      before:-left-[0.3rem] before:-right-[0.3rem] before:bottom-[5%]
      before:h-1/2 before:bg-amber-400 before:-z-10
      before:rounded-lg
      "
    >
      {children}
    </span>
  );
};
