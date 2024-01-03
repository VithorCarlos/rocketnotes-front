import { ButtonText } from "../../components/ButtonText";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Note } from "../../components/Note";
import { Section } from "../../components/Section";
import { Container, Brand, Menu, Search, Content, NewNote } from "./styles";
import { FiPlus, FiSearch } from "react-icons/fi";

export function Home() {
  return (
    <Container>
      <Brand>
        <h1>Rocketnotes</h1>
      </Brand>

      <Header />

      <Menu>
        <li>
          <ButtonText title="Todos" isActive />
        </li>

        <li>
          <ButtonText title="React" />
        </li>

        <li>
          <ButtonText title="Node" />
        </li>
      </Menu>

      <Search>
        <Input icon={FiSearch} placeholder="Pesquisar pelo título" />
      </Search>

      <Content>
        <Section title="Minhas notas">
          <Note
            data={{
              title: "React",
              tags: [
                { id: 1, name: "react" },
                { id: 2, name: "node" },
              ],
            }}
          />
        </Section>
      </Content>

      <NewNote to={"/new"}>
        <FiPlus />
        Criar nota
      </NewNote>
    </Container>
  );
}
