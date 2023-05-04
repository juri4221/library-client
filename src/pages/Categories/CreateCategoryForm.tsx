import { useDataContext } from '../../contexts/DataContext';
import React from 'react';
import { useFetch } from '../../hooks/useFetch';
import { Category } from '../../utils/types';
import { CategoryForm } from './CategoryForm';

interface CreateCategoryFormProps {
  onSuccess?: () => void;
}
export const CreateCategoryForm = ({ onSuccess }: CreateCategoryFormProps) => {
  const { setCategories } = useDataContext();

  const { fetch, isLoading, errorMessage } = useFetch();

  const onCreateSubmit = (name: string, priority?: number) => {
    fetch<Category>({
      data: {
        name,
        priority,
      },
      url: 'Categories',
      method: 'POST',
    }).then(({ data: newCategory }) => {
      setCategories((prevCategories) => [...prevCategories, newCategory]);
      onSuccess && onSuccess();
    });
  };

  return (
    <CategoryForm
      isCreate
      onSubmit={onCreateSubmit}
      isLoading={isLoading}
      errorMessage={errorMessage}
    />
  );
};
