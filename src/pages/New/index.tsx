import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { NoteItem } from "../../components/NoteItem";
import { Section } from "../../components/Section";
import { TextArea } from "../../components/TextArea";
import { Container, Form } from "./styles";
import { Link } from "react-router-dom";

export function New() {
  return (
    <Container>
      <Header />
      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <Link to="/">voltar</Link>
          </header>

          <Input placeholder="Título" />

          <TextArea placeholder="Observações" value="" />

          <Section title="Links úteis">
            <NoteItem value="https://google.com" onClick={() => {}} />
            <NoteItem isNew placeholder="Novo link" onClick={() => {}} />
          </Section>

          <Section title="Marcadores">
            <div className="tags">
              <NoteItem value="react" onClick={() => {}} />
              <NoteItem isNew placeholder="Novo marcador" onClick={() => {}} />
            </div>
          </Section>

          <Button title="Salvar"/>
        </Form>
      </main>
    </Container>
  );
}
