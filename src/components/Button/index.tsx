import { ButtonHTMLAttributes } from "react";
import { Container } from "./styles";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  isLoading?: boolean;
}

export function Button({ title, isLoading = false, ...rest }: Props) {
  return (
    <Container type="button" disabled={isLoading} {...rest}>
      <span>{isLoading ? "Carregando..." : title}</span>
    </Container>
  );
}
