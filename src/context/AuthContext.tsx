import { ReactNode, createContext, useCallback, useContext, useState } from 'react';
import { get } from '../Api/fetchCall';

type User = {
  id: number;
  name: string;
  email: string;
  updated_at: string;
  created_at: string;
};
type AuthContextType = {
  isLogin: boolean | undefined;
  user: User | undefined;
  getUser: () => Promise<void>;
};
export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isLogin, setIsLogin] = useState<boolean>();
  const [user, setUser] = useState<User>();

  const getUser = useCallback(async () => {
    try {
      const userResp = await get<User>('/user');
      setIsLogin(true);
      setUser(userResp.data);
    } catch (err) {
      setIsLogin(false);
      console.log(err);
    }
  }, []);

  return <AuthContext.Provider value={{ isLogin, user, getUser }}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuthContext must be used within a AuthProvider');
  }
  return context;
};
