import { NotesDTO } from "../../dtos/notes.dto";
import { Tag } from "../Tag";
import { Container } from "./styles";


interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  data: NotesDTO;
}

export function Note({ data, ...rest }: Props) {
  return (
    <Container {...rest}>
      <h1>{data.title}</h1>
      {data.tags && (
        <footer>
          {data.tags.map((tag) => (
            <Tag key={tag.id} title={tag.name}/>
          ))}
        </footer>
      )}
    </Container>
  );
}
