import React, { useState } from 'react';

const AuthContext = React.createContext({
  token: '',
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const startToken = localStorage.getItem('token')
  const startId = localStorage.getItem('Id')
  const [token, setToken] = useState(startToken);
  const [id, setId] = useState(startId);
  const userIsLoggedIn = !!token;
  const loginHandler = (token,id) => {
    setToken(token);
    setId(id)
    localStorage.setItem('token',token)
    localStorage.setItem('Id',id)
  };
  const logoutHandler = () => {
    setToken(null);
    setId(null);
    localStorage.removeItem('token')
    localStorage.removeItem('Id')
  };
  const contextValue = {
    token: token,
    id:id,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };
  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;