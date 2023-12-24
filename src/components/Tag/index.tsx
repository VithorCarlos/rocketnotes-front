import { Container } from "./styles";

interface Props {
  title: string;
}

export function Tag ({title}: Props) {
  return(
    <Container>{title}</Container>
  )
}