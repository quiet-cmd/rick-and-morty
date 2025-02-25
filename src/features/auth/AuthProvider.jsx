import { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);

  const login = () => {
    setIsAuth(true);
    sessionStorage.setItem('isAuth', 1)
  }

  const logout = () => {
    setIsAuth(false);
    sessionStorage.removeItem('isAuth')
  }

  useEffect(() => {
    setIsAuth(Boolean(sessionStorage.getItem('isAuth')))
  }, []);

  return <AuthContext.Provider value={{isAuth, login, logout }}>{children}</AuthContext.Provider>
}

export default AuthProvider;
