import { Container } from "./styles";

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  title: string;
  isActive?: boolean;
}

export function ButtonText({ title, isActive = false, ...rest }: Props) {
  return (
    <Container type="button" $isactive={isActive.toString()} {...rest}>
      {title}
    </Container>
  );
}
