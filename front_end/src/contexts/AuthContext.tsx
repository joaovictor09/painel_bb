import Router from 'next/router';
import { setCookie } from 'nookies';
import { createContext, useState } from "react";
import { api } from "../services/api";

interface ISignInData {
  email: string;
  password: string;
}

interface IUser {
  nickname: string;
  email: string;
}

interface IAuthContext {
  user: IUser;
  isAuthenticated: boolean;
  signIn: (data: ISignInData) => Promise<void>;
}

export const AuthContext = createContext({} as IAuthContext)

export function AuthProvider({ children }) {
  const [user, setUser] = useState<IUser | null>(null)
  const isAuthenticated = !!user;

  
  async function signIn({ email, password }: ISignInData) {
    
    try {
      const { token } = await api.post("/login",
      {email, password},
      ).then(
      res => {
        setUser(res.data.userData)
        return {
            'token': res.data.token,
          }
        }
      )
      
      //api.defaults.headers['authorization'] = token;
      setCookie(undefined, 'painel.token', token, {
        maxAge: 60 * 60 * 1 // 1 Hour
      })
      api.defaults.headers['authorization'] = `Bearer ${token}`
      Router.push('/dashboard')
      
    } catch (error) {
      console.log(error)
      window.alert("Email ou senha incorretos")
    }
    setUser(user)
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, signIn }}>
      { children }
    </AuthContext.Provider>
  )
}