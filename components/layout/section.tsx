import { ReactNode } from "react";
import { Container } from "./container";

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
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
