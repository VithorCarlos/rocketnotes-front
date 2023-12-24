import { InputHTMLAttributes } from "react";
import { Container } from "./styles";
import { IconType } from "react-icons";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  icon?: IconType;

}

export function Input({icon: Icon, ...rest}: Props) {
  return (
    <Container >
      {Icon && <Icon size={20}/>}
      <input {...rest}/>
    </Container>
  );
}