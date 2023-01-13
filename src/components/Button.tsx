import { ReactNode } from "react";
import { Spinner } from "./icons/Spinner";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: keyof typeof variants;
  className?: string;
  loading?: boolean;
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
  loading,
}: ButtonProps) => {
  const Element = href ? "a" : "button";
  const attributes = href ? { href } : {};
  return (
    <Element
      {...{ onClick, ...attributes }}
      className={`
      rounded-lg py-2 px-4 transition-all active:scale-95 whitespace-nowrap
      ${variants[variant]} ${className}
      ${loading ? "text-transparent relative" : ""}`}
    >
      {loading ? (
        <>
          <Spinner className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
          {children}
        </>
      ) : (
        children
      )}
    </Element>
  );
};
