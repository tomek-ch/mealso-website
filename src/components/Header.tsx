import { Button } from "./Button";
import { Container } from "./Container";
import { Logo } from "./icons/Logo";

export const Header = () => {
  return (
    <Container>
      <header className="flex justify-between items-center py-4">
        <a
          href="/"
          className="flex items-center gap-1 md:gap-2 active:scale-95 transition-all"
        >
          <div className="w-5 md:w-6">
            <Logo />
          </div>
          <h1 className="font-semibold text-lg md:text-2xl">Mealso</h1>
        </a>
        <Button className="text-sm md:text-base">Sign up</Button>
      </header>
    </Container>
  );
};
