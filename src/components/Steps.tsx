import { Container } from "./Container";
import { Heading } from "./Heading";
import { ArrowRight } from "./icons/ArrowRight";

const Step = ({ img = "", alt = "", text = "", className = "" }) => {
  return (
    <div className={className}>
      <img src={img} alt={alt} width="200" />
      <div className="text-center mt-6">{text}</div>
    </div>
  );
};

export const Steps = () => {
  return (
    <div className="py-10 bg-amber-400/50">
      <Container>
        <Heading>Simplify your meal planning</Heading>
        <div className="flex justify-between gap-4 md:content-center">
          <Step
            img="/add-meal.png"
            text="Add your favorite meals"
            alt="Meal form in the Mealso mobile app"
          />
          <ArrowRight width="24" className="pb-16" />
          <Step
            img="/groceries.png"
            text="Make a shopping list"
            alt="Shopping list in the Mealso mobile app"
          />
          <ArrowRight width="24" className="hidden md:block pb-16" />
          <Step
            img="/meals.png"
            text="Plan your next meal"
            alt="Meal list in the Mealso mobile app"
            className="hidden md:block"
          />
        </div>
      </Container>
    </div>
  );
};
