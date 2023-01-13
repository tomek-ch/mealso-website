import { ReactNode } from "react";
import { CircleCheck } from "./icons/CircleCheck";
import { Warning } from "./icons/Warning";

type AlertProps = {
  children: ReactNode;
  className?: string;
  variant: keyof typeof variants;
};

const variants = {
  danger: "text-red-600",
  success: "text-green-700",
};

const icons = {
  danger: <Warning width="16" />,
  success: <CircleCheck width="16" />,
};

export const Alert = ({ children, className = "", variant }: AlertProps) => {
  if (!children) {
    return null;
  }

  return (
    <div
      className={`flex gap-2 items-center ${className} ${variants[variant]}`}
    >
      {icons[variant]}
      {children}
    </div>
  );
};
