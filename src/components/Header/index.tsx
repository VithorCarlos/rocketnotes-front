import { Container, Profile, Logout } from "./styles";
import { RiShutDownLine } from 'react-icons/ri';

export function Header() {
  return (
    <Container>
      <Profile to="/profile">
        <img src="https://github.com/vithorcarlos.png" alt="Foto do usuário" />
        <div>
          <span>Bem-vindo,</span>
          <strong>Vithor Carlos</strong>
        </div>
      </Profile>

      <Logout>
        <RiShutDownLine />
      </Logout>
    </Container>
  );
}