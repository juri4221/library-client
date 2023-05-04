import { useEffect, useState } from 'react';
import { Category } from '../utils/types';
import { useFetch } from './useFetch';
import { useAppContext } from '../contexts/AppContext';

export const useCategories = () => {
  const { token } = useAppContext();
  const { fetch, isError, isLoading, errorMessage } = useFetch();
  const [categories, setCategories] = useState<Category[]>([]);

  const request = () => {
    fetch<Category[]>({
      url: 'Categories',
      method: 'GET',
    }).then(({ data }) => {
      setCategories(data);
    });
  };

  useEffect(() => {
    request();
  }, [token]);

  return {
    categories,
    setCategories,
    isError,
    isLoading,
    errorMessage,
  };
};
