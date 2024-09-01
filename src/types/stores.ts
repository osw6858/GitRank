export interface User {
  id: string;
  name: string;
  email: string;
}

export interface UserStoreState {
  user: User | null;
  isLoggedIn: boolean;
  // eslint-disable-next-line no-unused-vars
  login: (user: User) => void;
  logout: () => void;
  // eslint-disable-next-line no-unused-vars
  updateUser: (userData: Partial<User>) => void;
}

export interface EmailState {
  checkedEmail: boolean;
  email: string;
  // eslint-disable-next-line no-unused-vars
  setEmail: (email: string) => void;
  // eslint-disable-next-line no-unused-vars
  setCheckedEmail: (email: boolean) => void;
  clearEmail: () => void;
}
