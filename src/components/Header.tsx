import { ReactNode } from "react";
import { Container } from "./Container";
import { Logo } from "./Logo";

interface HeaderProps {
  children: ReactNode;
}

export const Header = ({ children }: HeaderProps) => {
  return (
    <Container>
      <header className="flex justify-between items-center py-4">
        <a href="/">
          <h1>
            <Logo />
          </h1>
        </a>
        {children}
      </header>
    </Container>
  );
};
