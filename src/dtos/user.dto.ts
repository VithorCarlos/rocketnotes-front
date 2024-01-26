export interface UserDataDTO {
  name: string;
  email: string;
  avatar?: string | null;
}

export interface UpdateUserDTO {
  user: UserDataDTO;
  avatarFile?: string;
}
