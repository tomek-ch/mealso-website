import { Card } from "./Card";
import { Container } from "./Container";
import { Heading } from "./Heading";
import { Check } from "./icons/Check";
import { List } from "./icons/List";
import { Share } from "./icons/Share";
import { Utensils } from "./icons/Utensils";

export const Cards = () => {
  return (
    <Container>
      <div className="py-14">
        <Heading>Why use Mealso</Heading>
        <div className="grid gap-11 md:grid-cols-2">
          <Card
            icon={<Utensils width="20" />}
            title="Decide what to eat faster"
            text="Answer “What are we having for dinner?” with confidence. Just pick a meal from your list."
          />
          <Card
            icon={<Check width="20" />}
            title="No more searching the shelves for ingredients"
            text="Keep track of all the products required for your meals."
          />
          <Card
            icon={<Share width="20" />}
            title="Share your grocery lists"
            text="Stay on the same with your family by sharing your grocery shopping lists."
          />
          <Card
            icon={<List width="20" />}
            title="Create grocery lists faster"
            text="Quickly create a gorcery shopping list based on the missing ingredients for your meals."
          />
        </div>
      </div>
    </Container>
  );
};
