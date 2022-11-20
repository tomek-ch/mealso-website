import { ReactNode } from "react";
import { Hero } from "./Hero";

interface BottomHeroProps {
  children: ReactNode;
}

export const BottomHero = ({ children }: BottomHeroProps) => {
  return (
    <Hero
      title={
        <h2 className="text-3xl">
          Speed up your meal planning and grocery shopping
        </h2>
      }
      text="Simplify burdensome tasks and improve your productivity. Get notified when Mealso is released."
      img={<img src="/hero2.jpg" alt="Screenshot of the app" width="375" />}
      btn={children}
    ></Hero>
  );
};
