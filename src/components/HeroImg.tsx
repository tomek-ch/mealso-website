export const HeroImg = () => {
  return (
    <div className="rounded-[6%] bg-amber-400/70 px-[4%] max-w-[500px]">
      <div className="h-[6%] w-full" />
      <div className="flex gap-[5%]">
        <img
          src="/meals.png"
          alt="Meal list in the Mealso app"
          className="relative -mb-8 hover:-translate-y-2 transition-all w-[47.5%]"
        />
        <img
          src="/groceries.png"
          alt="Grocery list in the Mealso app"
          className="-mt-8 hover:-translate-y-2 transition-all w-[47.5%]"
        />
      </div>
      <div className="h-[6%] w-full" />
    </div>
  );
};
