import React, { createContext, useContext, useEffect, useState } from 'react';

interface AppContextValue {
  token: string | null;
  setToken: React.Dispatch<React.SetStateAction<string | null>>;
}

export const AppContext = createContext<AppContextValue>({
  token: null,
  setToken: () => null,
});

interface AppContextProviderProps {
  children: React.ReactNode;
}

export const AppContextProvider = ({ children }: AppContextProviderProps) => {
  const existingToken = localStorage.getItem('authToken');
  const [token, setToken] = useState<string | null>(existingToken);

  return (
    <AppContext.Provider value={{ token, setToken }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
