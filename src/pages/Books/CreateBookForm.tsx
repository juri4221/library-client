import { BookForm } from './BookForm';
import { Book } from '../../utils/types';
import { useFetch } from '../../hooks/useFetch';
import { useDataContext } from '../../contexts/DataContext';

interface CreateBookFormProps {
  onSuccess: () => void;
}
export const CreateBookForm = ({ onSuccess }: CreateBookFormProps) => {
  // selectedCategories?.map((category) => category.value)
  const { books, setBooks } = useDataContext();

  const { fetch, isLoading, errorMessage } = useFetch();

  const onCreateSubmit = (
    name: string,
    description: string,
    imageSource: string,
    categoryIds: number[],
    authorId: number,
  ) => {
    fetch<Book>({
      data: {
        name,
        description,
        imageSource,
        categoryIds,
        authorId,
      },
      url: 'Books',
      method: 'POST',
    }).then(({ data: newBook }) => {
      setBooks([...books, newBook]);
      onSuccess();
    });
  };
  return (
    <BookForm
      onSubmit={onCreateSubmit}
      errorMessage={errorMessage}
      isLoading={isLoading}
    />
  );
};
