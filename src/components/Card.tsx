import { ReactNode } from "react";

interface CardProps {
  icon: ReactNode;
  title: string;
  text: string;
}

export const Card = ({ icon, title, text }: CardProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-8">
      <div
        className="bg-amber-200 text-amber-500 rounded-lg w-9 h-9
        flex justify-center items-center"
      >
        {icon}
      </div>
      <h2 className="font-semibold text-2xl my-3">{title}</h2>
      <p className="text-slate-600">{text}</p>
    </div>
  );
};
