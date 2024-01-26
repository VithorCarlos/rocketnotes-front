import { useState } from "react";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { NoteItem } from "../../components/NoteItem";
import { Section } from "../../components/Section";
import { TextArea } from "../../components/TextArea";
import { Container, Form } from "./styles";
import { Link } from "react-router-dom";

export function New() {
  const [links, setLinks] = useState<string[]>([]);
  const [newLink, setNewLink] = useState("");

  const [tags, setTags] = useState<string[]>([]);
  const [newTag, setNewTag] = useState("");

  function handleAddLink() {
    if (!!newLink) {
      setLinks((prevState) => [...prevState, newLink]);
      setNewLink("");
    }
  }

  function handleAddTag() {
    if (!!newTag) {
      setTags((prevState) => [...prevState, newTag]);
      setNewTag("");
    }
  }

  function handleRemoveLink(linkTodelete: string) {
    setLinks((prevState) => prevState.filter((link) => link !== linkTodelete));
  }

  function handleRemoveTag(tagTodelete: string) {
    setTags((prevState) => prevState.filter((tag) => tag !== tagTodelete));
  }

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

          <TextArea placeholder="Observações" defaultValue={""} />

          <Section title="Links úteis">
            <NoteItem
              isNew
              value={newLink}
              placeholder="Novo link"
              onChange={(event) => setNewLink(event.target.value)}
              onClick={handleAddLink}
            />

            {links?.map((link, index) => (
              <NoteItem
                key={String(index)}
                value={link}
                onClick={() => handleRemoveLink(link)}
              />
            ))}
          </Section>

          <Section title="Marcadores">
            <div className="tags">
              <NoteItem
                isNew
                placeholder="Novo marcador"
                onChange={(event) => setNewTag(event.target.value)}
                onClick={handleAddTag}
                value={newTag}
              />

              {tags?.map((tag, index) => (
                <NoteItem
                  key={String(index)}
                  value={tag}
                  onClick={() => handleRemoveTag(tag)}
                />
              ))}
            </div>
          </Section>

          <Button title="Salvar" />
        </Form>
      </main>
    </Container>
  );
}
