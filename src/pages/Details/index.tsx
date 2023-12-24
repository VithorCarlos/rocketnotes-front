import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Container, Links, Content } from "./styles";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";
import { ButtonText } from "../../components/ButtonText";

export function Details() {
  return (
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title="Excluir nota" />

          <h1>Introdução ao react</h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil rem
            mollitia delectus ullam consequatur. Amet, ab. Eveniet perferendis
            natus aut blanditiis commodi qui dolores, adipisci modi alias
            veritatis, repellat cupiditate.
          </p>

          <Section title="Links úteis">
            <Links>
              <li>
                <a href="#">https://google.com</a>
              </li>
              <li>
                <a href="#">https://facebook.com</a>
              </li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="express" />
            <Tag title="node" />
          </Section>
          
          
          <Button title="Voltar" />
        </Content>
      </main>
    </Container>
  );
}
