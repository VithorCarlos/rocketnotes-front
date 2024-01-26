import { useEffect, useState } from "react";
import { ButtonText } from "../../components/ButtonText";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Note } from "../../components/Note";
import { Section } from "../../components/Section";
import { Container, Brand, Menu, Search, Content, NewNote } from "./styles";
import { FiPlus, FiSearch } from "react-icons/fi";
import { api } from "../../services/api";
import { TagsDto } from "../../dtos/tags.dto";
import { useNavigate } from "react-router-dom";
import { NotesDTO } from "../../dtos/notes.dto";

export function Home() {
  const [tags, setTags] = useState<TagsDto[]>([]);
  const [notes, setNotes] = useState<NotesDTO[]>([]);
  const [tagsSelected, setTagsSelected] = useState<string[]>([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  function handleTagSelected(tagName: string) {
    setTagsSelected((prevState) => {
      if (tagName === "all") {
        return [];
      }

      const updatedTags = [...prevState];

      if (updatedTags.includes(tagName)) {
        return updatedTags.filter((tag) => tag !== tagName);
      }

      return [...updatedTags, tagName];
    });
  }

  function handleDetails(id: number) {
    navigate(`/details/${id}`);
  }

  useEffect(() => {
    const fetchTags = async () => {
      const response = (await api.get("/tags")).data;

      setTags(response);
    };

    fetchTags();
  }, []);

  useEffect(() => {
    const fetchNotes = async () => {
      const response = (
        await api.get(`/notes?title=${search}&tags=${tagsSelected}`)
      ).data;

      setNotes(response);
    };

    fetchNotes();
  }, [tagsSelected, search]);

  return (
    <Container>
      <Brand>
        <h1>Rocketnotes</h1>
      </Brand>

      <Header />

      <Menu>
        <li>
          <ButtonText
            title="Todos"
            onClick={() => handleTagSelected("all")}
            isActive={tagsSelected.length === 0}
          />
        </li>
        {tags &&
          tags.map((tag) => (
            <li key={String(tag.id)}>
              <ButtonText
                title={tag?.name}
                onClick={() => handleTagSelected(tag.name)}
                isActive={tagsSelected.includes(tag.name)}
              />
            </li>
          ))}
      </Menu>

      <Search>
        <Input
          icon={FiSearch}
          placeholder="Pesquisar pelo título"
          onChange={(event) => setSearch(event.target.value)}
        />
      </Search>

      <Content>
        <Section title="Minhas notas">
          {notes?.map((note) => (
            <Note
              key={String(note.id)}
              data={note}
              onClick={() => handleDetails(note.id)}
            />
          ))}
        </Section>
      </Content>

      <NewNote to={"/new"}>
        <FiPlus />
        Criar nota
      </NewNote>
    </Container>
  );
}
