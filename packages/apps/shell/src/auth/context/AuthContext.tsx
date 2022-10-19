import { createContext } from "react";

export interface AuthState {
  logged: boolean;
  user?: IUser;
  login?: (user: string) => void;
  logout?: () => void;
}

export const initialState: AuthState = {
  logged: false,
  user: undefined,
};
export interface IUser {
  name: string;
  id: string;
}

export const AuthContext = createContext<AuthState>(initialState);
