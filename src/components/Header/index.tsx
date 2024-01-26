import { useAuth } from "../../context/auth";
import { api } from "../../services/api";
import { Container, Profile, Logout } from "./styles";
import { RiShutDownLine } from "react-icons/ri";
import AvatarSvg from "../../assets/svg/avatar_placeholder.svg";
import { useNavigate } from "react-router-dom";

export function Header() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : AvatarSvg;

  function handleSignOut() {
    navigate("/");
    signOut();
  }

  return (
    <Container>
      <Profile to="/profile">
        <img src={avatarUrl} alt={user?.name} />
        <div>
          <span>Bem-vindo,</span>
          <strong>{user?.name}</strong>
        </div>
      </Profile>

      <Logout onClick={handleSignOut}>
        <RiShutDownLine />
      </Logout>
    </Container>
  );
}
