import { Container } from "./Container";
import { ArrowRight } from "./icons/ArrowRight";

const Step = ({
  img,
  alt,
  text,
}: {
  img: string;
  alt: string;
  text: string;
}) => {
  return (
    <div>
      <img src={img} alt={alt} width="200" />
      <div className="text-center mt-6">{text}</div>
    </div>
  );
};

export const Steps = () => {
  return (
    <div className="py-10 bg-amber-400/50">
      <Container>
        <h2 className="text-3xl font-semibold text-center mb-16">
          Simplify your meal planning
        </h2>
        <div className="flex justify-between md:content-center">
          <Step
            img="/add-meal.png"
            text="1. Add your favorite meals"
            alt="Meal form in the Mealso mobile app"
          />
          <ArrowRight width="24" />
          <Step
            img="/groceries.png"
            text="2. Make a shopping list"
            alt="Shopping list in the Mealso mobile app"
          />
          <ArrowRight width="24" />
          <Step
            img="/meals.png"
            text="3. Plan your next meal"
            alt="Meal list in the Mealso mobile app"
          />
        </div>
      </Container>
    </div>
  );
};
