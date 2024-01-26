import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Container, Links, Content } from "./styles";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";
import { ButtonText } from "../../components/ButtonText";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { NotesDTO } from "../../dtos/notes.dto";

export function Details() {
  const params = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState<NotesDTO>();

  function handleBack() {
    navigate(-1);
  }

  async function handleDeleteNote() {
    const confirm = window.confirm("Tem certeza que desaja remover a nota?");

    if (confirm) {
      await api.delete(`/notes/${params.id}`);
      handleBack();
    }
  }

  useEffect(() => {
    const fetchNote = async () => {
      const response = await api.get(`/notes/${params.id}`);

      setData(response.data);
    };

    fetchNote();
  }, []);

  return (
    <Container>
      <Header />

      {!!data && (
        <main>
          <Content>
            <ButtonText title="Excluir nota" onClick={handleDeleteNote} />

            <h1>{data?.title}</h1>

            <p>{data?.description}</p>

            <Section title="Links úteis">
              <Links>
                {data?.links?.map((link) => (
                  <li key={link.id}>
                    <a href={link.url} target="_blank">
                      {link.url}
                    </a>
                  </li>
                ))}
              </Links>
            </Section>

            <Section title="Marcadores">
              {data?.tags?.map((tag) => (
                <Tag key={tag.id} title={tag.name} />
              ))}
            </Section>

            <Button title="Voltar" onClick={handleBack} />
          </Content>
        </main>
      )}
    </Container>
  );
}
