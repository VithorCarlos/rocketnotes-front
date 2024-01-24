import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

interface AuthContext {
  children: React.ReactNode;
}

interface LoginData {
  email: string;
  password: string;
}

interface UserData {
  name: string;
  email?: string;
  avatar?: string | null;
}

interface AuthData {
  signIn: ({ email, password }: LoginData) => Promise<void>;
  signOut: () => void;
  updateProfile: (user: UserData) => Promise<void>;
  user: UserData;
}

const AuthContext = createContext({} as AuthData);

const AuthProvider = ({ children }: AuthContext) => {
  const [data, setData] = useState({} as { user: UserData; token: string });
  const USER_STORAGE = "@rocketnotes:user";
  const TOKEN_STORAGE = "@rocketnotes:token";

  async function signIn({ email, password }: LoginData) {
    try {
      const response = await api.post("/sessions", { email, password });
      const { user, token } = response.data;
      localStorage.setItem(USER_STORAGE, JSON.stringify(user));
      localStorage.setItem(TOKEN_STORAGE, token);
      setData({ user, token });

      api.defaults.headers.common.Authorization = `Bearer ${token}`;
    } catch (error: any) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("não foi possível cadastrar");
      }
    }
  }

  function signOut() {
    localStorage.removeItem(USER_STORAGE);
    localStorage.removeItem(TOKEN_STORAGE);
    setData({} as { user: UserData; token: string });
  }

  async function updateProfile(user: UserData) {
    try {
      if (user.avatar) {
        const fileUpload = new FormData();
        fileUpload.append("avatar", user.avatar);

        const response = await api.patch("/users/avatar", fileUpload);
        user.avatar = response.data.avatar;
      }
      await api.put("/users", user);
      
      localStorage.setItem(USER_STORAGE, JSON.stringify(user));

      setData({ user, token: data.token });
      alert("Perfil atualizado!");
    } catch (error: any) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("não foi possível atualizar o perfil");
      }
    }
  }

  useEffect(() => {
    const user = localStorage.getItem(USER_STORAGE);
    const token = localStorage.getItem(TOKEN_STORAGE);

    if (user && token) {
      api.defaults.headers.common.Authorization = `Bearer ${token}`;
      setData({ user: JSON.parse(user), token });
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ user: data.user, signIn, signOut, updateProfile }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};

export { AuthProvider, useAuth };
