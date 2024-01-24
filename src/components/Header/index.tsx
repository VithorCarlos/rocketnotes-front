import { useAuth } from "../../context/auth";
import { api } from "../../services/api";
import { Container, Profile, Logout } from "./styles";
import { RiShutDownLine } from "react-icons/ri";
import AvatarSvg from "../../assets/svg/avatar_placeholder.svg";

export function Header() {
  const { user, signOut } = useAuth();

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : AvatarSvg;

  return (
    <Container>
      <Profile to="/profile">
        <img src={avatarUrl} alt={user?.name} />
        <div>
          <span>Bem-vindo,</span>
          <strong>{user?.name}</strong>
        </div>
      </Profile>

      <Logout onClick={signOut}>
        <RiShutDownLine />
      </Logout>
    </Container>
  );
}
