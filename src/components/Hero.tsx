import { ReactNode } from "react";
import { Container } from "./Container";
import { Highlight } from "./Highlight";

interface HeroProps {
  children: ReactNode;
}

export const Hero = ({ children }: HeroProps) => {
  return (
    <Container>
      <div className="flex flex-col items-center md:flex-row justify-between gap-10 md:pt-10 pb-10 md:pb-24">
        <div className="max-w-md text-center md:text-left flex flex-col gap-7 items-center md:items-start w-full">
          <h1 className="text-4xl md:text-5xl font-semibold pt-5">
            <Highlight>Meal</Highlight> planning and{" "}
            <Highlight>grocery</Highlight> shopping made{" "}
            <Highlight>easy</Highlight>
          </h1>
          <p className="text-slate-600 md:max-w-xs">
            Mealso makes it easy to keep track of your groceries and plan your
            meals.
          </p>
          {children}
        </div>
        <img src="/hero.jpg" width="500" />
      </div>
    </Container>
  );
};
