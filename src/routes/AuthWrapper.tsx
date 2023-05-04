import { Navigate } from 'react-router-dom';
import { routeMap } from './routeMap';
import React from 'react';
import { useAppContext } from '../contexts/AppContext';

export const AuthWrapper = () => {
  const { token } = useAppContext();

  return token !== null ? (
    <Navigate to={routeMap.home} replace />
  ) : (
    <Navigate to={routeMap.signIn} replace />
  );
};
