import { Button } from "./Button";
import { Container } from "./Container";
import { Carrot } from "./icons/Carrot";
import { Logo } from "./Logo";

export const Header = () => {
  return (
    <Container>
      <header className="flex justify-between items-center py-4">
        <a href="/">
          <h1>
            <Logo />
          </h1>
        </a>
        <Button className="text-sm md:text-base">Sign up</Button>
      </header>
    </Container>
  );
};
