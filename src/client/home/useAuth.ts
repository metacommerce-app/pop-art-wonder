import React from 'react';

export interface AuthContextProps {
  address?: `0x${string}`;
  isLoading: boolean;
  login: () => void;
  logout: () => void;
}

export const AuthContext = React.createContext<AuthContextProps>(undefined!);
export const useAuth = () => React.useContext(AuthContext);