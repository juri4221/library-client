import React from 'react';
import { Category } from '../../utils/types';
import { useDataContext } from '../../contexts/DataContext';
import { useFetch } from '../../hooks/useFetch';
import { Button } from '../../components/Button';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

interface DeleteCategoryButtonProps {
  category: Category;
}
export const DeleteCategoryButton = ({
  category,
}: DeleteCategoryButtonProps) => {
  const { fetch } = useFetch();
  const { setCategories } = useDataContext();

  const onDeleteClickHandler = (id: number) => {
    if (category.books.length > 0) {
      alert(
        'This can not be deleted because there books authored by him in our library!',
      );
      return;
    }
    if (window.confirm('Are you sure you want to delete this category?')) {
      fetch({
        url: `Categories/${id}`,
        method: 'DELETE',
      }).then(() => {
        setCategories((prevCategories) =>
          prevCategories.filter((category) => id !== category.id),
        );
      });
    }
  };

  return (
    <Button
      onClick={() => onDeleteClickHandler(category.id)}
      isIconButton
      icon={faTrashCan}
    />
  );
};
