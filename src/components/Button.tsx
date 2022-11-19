import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: keyof typeof variants;
  className?: string;
}

const variants = {
  primary: "bg-black text-white font-semibold",
  secondary: "",
};

export const Button = ({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
}: ButtonProps) => {
  const Element = href ? "a" : "button";
  const attributes = href ? { href } : {};
  return (
    <Element
      {...{ onClick, ...attributes }}
      className={`
      rounded-lg py-2 px-4 transition-all active:scale-95 whitespace-nowrap
      ${variants[variant]} ${className}`}
    >
      {children}
    </Element>
  );
};
