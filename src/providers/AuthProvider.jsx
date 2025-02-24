import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

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

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within a AuthProvider')
  }
  return context
}

export { AuthProvider, useAuth }
