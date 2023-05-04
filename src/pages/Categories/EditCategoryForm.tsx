import { Category } from '../../utils/types';
import { useDataContext } from '../../contexts/DataContext';
import React from 'react';
import { useFetch } from '../../hooks/useFetch';
import { CategoryForm } from './CategoryForm';

interface EditCategoryFormProps {
  category: Category;
  onSuccess?: () => void;
}
export const EditCategoryForm = ({
  category,
  onSuccess,
}: EditCategoryFormProps) => {
  const { setCategories } = useDataContext();

  const { fetch, isLoading, errorMessage } = useFetch();

  const onUpdateSubmit = (name: string, priority?: number) => {
    fetch<Category>({
      data: {
        name,
        priority,
      },
      url: `Categories/${category.id}`,
      method: 'PUT',
    }).then(({ data: updatedCategory }) => {
      setCategories((prevCategories) => [
        ...prevCategories.map((prevCategory) =>
          prevCategory.id === category.id
            ? { ...prevCategory, ...updatedCategory }
            : prevCategory,
        ),
      ]);
      onSuccess && onSuccess();
    });
  };

  return (
    <CategoryForm
      category={category}
      onSubmit={onUpdateSubmit}
      isLoading={isLoading}
      errorMessage={errorMessage}
    />
  );
};
