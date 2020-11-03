import React from 'react';
import { createContext, useState } from 'react';

export const Context = createContext({
  isLogged: {},
  setIsLogged: () => {},
});

export const Provider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(true);

  const isLoggedContext = {
    setIsLogged: isLogged => setIsLogged(isLogged),
    isLogged,
  };

  return (
    <Context.Provider value={isLoggedContext}>{children}</Context.Provider>
  );
};

export { Provider as IsLoggedContextProvider, Context as IsLoggedContext };
