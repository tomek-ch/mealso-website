import { ReactNode } from "react";

export const Heading = ({ children }: { children: ReactNode }) => {
  return (
    <h2 className="text-3xl font-semibold text-center mb-16">{children}</h2>
  );
};
