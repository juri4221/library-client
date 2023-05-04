import React from 'react';
import { Navigate } from 'react-router-dom';
import { routeMap } from './routeMap';
import { useAppContext } from '../contexts/AppContext';

export interface ProtectedRouteProps {
  element: JSX.Element;
}

export const ProtectedRoute = ({ element }: ProtectedRouteProps) => {
  const { token } = useAppContext();

  if (token !== null) {
    return element;
  }

  return <Navigate to={{ pathname: routeMap.signIn }} />;
};
