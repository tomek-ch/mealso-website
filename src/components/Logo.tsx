import { Carrot } from "./icons/Carrot";

export const Logo = ({ className = "" }) => {
  return (
    <div className={`flex items-center gap-1 md:gap-2 ${className}`}>
      <div className="w-5 md:w-6">
        <Carrot />
      </div>
      <div className="font-semibold text-lg md:text-2xl">Mealso</div>
    </div>
  );
};
