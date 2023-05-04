import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import Home from '../pages/Home';
import SignIn from '../pages/SignIn/SignIn';
import { ProtectedRoute } from './ProtectedRoute';
import { routeMap } from './routeMap';
import { AuthWrapper } from './AuthWrapper';
import Categories from '../pages/Categories/Categories';
import Authors from '../pages/Authors/Authors';
import Books from '../pages/Books/Books';
import { DataContextProvider } from '../contexts/DataContext';

function Router() {
  return (
    <BrowserRouter>
      <DataContextProvider>
        <Routes>
          <Route path={routeMap.index} element={<AuthWrapper />} />
          <Route path={routeMap.signIn} element={<SignIn />} />
          <Route
            path={routeMap.home}
            element={<ProtectedRoute element={<Home />} />}
          />
          <Route
            path={routeMap.categories}
            element={<ProtectedRoute element={<Categories />} />}
          />
          <Route
            path={routeMap.authors}
            element={<ProtectedRoute element={<Authors />} />}
          />
          <Route
            path={routeMap.books}
            element={<ProtectedRoute element={<Books />} />}
          />
          <Route path={routeMap.unknown} element={<>404 Page not found</>} />
        </Routes>
      </DataContextProvider>
    </BrowserRouter>
  );
}

export default Router;
