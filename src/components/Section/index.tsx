import { Container } from "./styles";

interface Props {
  title: string;
  children: React.ReactNode
}

export function Section({ title, children }: Props) {
  return (
    <Container>
      <h2>{title}</h2>
      {children}
    </Container>
  );
}
