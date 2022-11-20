import { ReactNode } from "react";
import { Container } from "./Container";

interface HeroProps {
  title: ReactNode;
  text: ReactNode;
  img: ReactNode;
  btn: ReactNode;
}

export const Hero = ({ title, text, img, btn }: HeroProps) => {
  return (
    <Container>
      <div className="flex flex-col items-center md:flex-row justify-between gap-10 md:pt-10 pb-10 md:pb-24">
        <div className="max-w-md text-center md:text-left flex flex-col gap-7 items-center md:items-start w-full">
          <div className="text-4xl md:text-5xl font-semibold pt-5">{title}</div>
          <div className="text-slate-600">{text}</div>
          {btn}
        </div>
        {img}
      </div>
    </Container>
  );
};
