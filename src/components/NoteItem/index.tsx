import { InputHTMLAttributes } from "react";
import { Container } from "./styles";
import { FiPlus, FiX } from "react-icons/fi";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  isNew?: boolean;
  value?: string;
  onClick: () => void;
}

export function NoteItem({ isNew, value, onClick, ...rest }: Props) {
  return (
    <Container $isNew={isNew}>
      <input type="text" {...{ value, ...rest }} readOnly={!isNew} />

      <button type="button" {...{ onClick }}>
        {isNew ? <FiPlus /> : <FiX />}
      </button>
    </Container>
  );
}
