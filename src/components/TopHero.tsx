import { ReactNode } from "react";
import { Hero } from "./Hero";
import { Highlight } from "./Highlight";

interface TopHeroProps {
  children: ReactNode;
}

export const TopHero = ({ children }: TopHeroProps) => {
  return (
    <Hero
      title={
        <h1>
          <Highlight>Meal</Highlight> planning and{" "}
          <Highlight>grocery</Highlight> shopping made{" "}
          <Highlight>easy</Highlight>
        </h1>
      }
      text={
        <p className="md:max-w-xs">
          Mealso makes it easy to keep track of your groceries and plan your
          meals.
        </p>
      }
      img={<img src="/hero.jpg" width="500" />}
      btn={children}
    />
  );
};
