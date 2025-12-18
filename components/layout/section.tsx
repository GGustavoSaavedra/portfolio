import { ReactNode } from "react";
import { Container } from "./container";

interface SectionProps {
  id?: string; // para el scroll del navbar
  children: ReactNode;
  className?: string; // clases del <section>
  containerClassName?: string; // clases del <Container>
}

export function Section({
  id,
  children,
  className = "",
  containerClassName = "",
}: SectionProps) {
  return (
    <section id={id} className={className}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
