import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { useState } from 'react';
import { useAppContext } from '../contexts/AppContext';
import { routeMap } from '../routes/routeMap';
import { useNavigate } from 'react-router-dom';

export const useFetch = (isAuthorized = true) => {
  const navigate = useNavigate();
  const { token } = useAppContext();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const authHeaders = isAuthorized ? { Authorization: `Bearer ${token}` } : {};

  const fetch = async <T>(
    options: AxiosRequestConfig,
  ): Promise<AxiosResponse<T>> => {
    setIsError(false);
    setIsLoading(true);
    return await axios({
      ...options,
      url: `http://localhost:5233/${options.url}`,
      headers: {
        ...authHeaders,
        ...options.headers,
      },
    })
      .catch((error) => {
        if (error.response.status === 401) {
          navigate(routeMap.signIn, { replace: true });
        }
        setErrorMessage(
          error.response.status === 404
            ? 'User with this credentials was not found!'
            : error.response.status === 401
            ? 'Session expired, Please sign in again !'
            : 'An error occurred! Please try again later.',
        );
        setIsError(true);
        throw error;
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return {
    fetch,
    isLoading,
    isError,
    errorMessage,
  };
};
