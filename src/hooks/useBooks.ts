import { useEffect, useState } from 'react';
import { Book } from '../utils/types';
import { useFetch } from './useFetch';
import { useAppContext } from '../contexts/AppContext';

export const useBooks = () => {
  const { token } = useAppContext();
  const { fetch, isError, isLoading, errorMessage } = useFetch();
  const [books, setBooks] = useState<Book[]>([]);

  const request = () => {
    fetch<Book[]>({
      url: 'Books',
      method: 'GET',
    }).then(({ data }) => {
      setBooks(data);
    });
  };

  useEffect(request, [token]);

  return {
    books,
    setBooks,
    isError,
    isLoading,
    errorMessage,
  };
};
