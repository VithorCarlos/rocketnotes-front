import { useState } from "react";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { NoteItem } from "../../components/NoteItem";
import { Section } from "../../components/Section";
import { TextArea } from "../../components/TextArea";
import { Container, Form } from "./styles";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { ButtonText } from "../../components/ButtonText";

export function New() {
  const navigate = useNavigate();

  const [links, setLinks] = useState<string[]>([]);
  const [newLink, setNewLink] = useState("");

  const [tags, setTags] = useState<string[]>([]);
  const [newTag, setNewTag] = useState("");

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

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

  async function handleNewNote() {
    if (!title) {
      alert("Digite o título da nota.");
    }

    if (newLink) {
      return alert(
        "Você deixou uma link no campo para adicionar, mas não clicou em adicionar. Clique para adicionar ou deixe o campo vazio"
      );
    }

    if (newTag) {
      return alert(
        "Você deixou uma tag no campo para adicionar, mas não clicou em adicionar. Clique para adicionar ou deixe o campo vazio"
      );
    }

    await api.post("/notes", { title, description, tags, links });
    alert("nota criada com sucesso!");
    navigate(-1);
  }

  return (
    <Container>
      <Header />
      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <ButtonText title="Voltar" onClick={() => navigate(-1)} />
          </header>

          <Input
            placeholder="Título"
            onChange={(event) => setTitle(event.target.value)}
          />

          <TextArea
            placeholder="Observações"
            defaultValue={""}
            onChange={(event) => setDescription(event.target.value)}
          />

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

          <Button title="Salvar" onClick={handleNewNote} />
        </Form>
      </main>
    </Container>
  );
}
