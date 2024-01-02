import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";
import { Avatar, Container, Form } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function Profile() {
  return (
    <Container>
      <header>
        <a href="/">
          <FiArrowLeft />
        </a>
      </header>

      <Form>
        <Avatar>
          <img
            src="https://github.com/vithorcarlos.png"
            alt="Foto do usuário"
          />
          <label htmlFor="avatar">
            <FiCamera /> <input id="avatar" type="file" />
          </label>
        </Avatar>
        <Input type="text" placeholder="Nome" icon={FiUser} />
        <Input type="email" placeholder="Email" icon={FiMail} />
        <Input type="password" placeholder="Senha atual" icon={FiLock} />
        <Input type="password" placeholder="Nova senha" icon={FiLock} />

        <Button title="Salvar" />
      </Form>
    </Container>
  );
}
