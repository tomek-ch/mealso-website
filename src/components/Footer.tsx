import { Container } from "./Container";
import { Logo } from "./Logo";

export const Footer = () => {
  return (
    <div className="bg-slate-100 py-5 md:py-10">
      <Container>
        <Logo className="justify-center" />
      </Container>
    </div>
  );
};
