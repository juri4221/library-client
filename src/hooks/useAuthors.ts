import { useEffect, useState } from 'react';
import { Author } from '../utils/types';
import { useFetch } from './useFetch';
import { useAppContext } from '../contexts/AppContext';

export const useAuthors = () => {
  const { token } = useAppContext();
  const { fetch, isError, isLoading, errorMessage } = useFetch();
  const [authors, setAuthors] = useState<Author[]>([]);

  const request = () => {
    fetch<Author[]>({
      url: 'Authors',
      method: 'GET',
    }).then(({ data }) => {
      setAuthors(data);
    });
  };

  useEffect(request, [token]);

  return {
    authors,
    setAuthors,
    isError,
    isLoading,
    errorMessage,
  };
};
