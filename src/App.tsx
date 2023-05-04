import React from 'react';
import Router from './routes/Router';
import { AppContextProvider } from './contexts/AppContext';
import { AppContainer } from './components/styles';

function App() {
  return (
    <AppContextProvider>
      <AppContainer>
        <Router />
      </AppContainer>
    </AppContextProvider>
  );
}

export default App;
