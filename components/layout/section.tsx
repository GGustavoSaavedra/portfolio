import { ReactNode } from "react";
import { Container } from "./container";

interface SectionProps {
  id?: string; // para el scroll del navbar
  children: ReactNode;
  className?: string;
}

export function Section({ id, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={className}>
      <Container>{children}</Container>
    </section>
  );
}
