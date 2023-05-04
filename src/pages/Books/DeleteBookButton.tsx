import { Book } from '../../utils/types';
import { useFetch } from '../../hooks/useFetch';
import { useDataContext } from '../../contexts/DataContext';
import { Button } from '../../components/Button';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

interface DeleteBookButtonProps {
  book: Book;
}
export const DeleteBookButton = ({ book }: DeleteBookButtonProps) => {
  const { fetch } = useFetch();
  const { setBooks } = useDataContext();

  const onClickDeleteHandler = () => {
    if (window.confirm('Are you sure you want to delete this book?')) {
      fetch<Book>({
        url: `Books/${book.id}`,
        method: 'DELETE',
      }).then(({ data }) => {
        setBooks((prevBooks) => prevBooks.filter((b) => book.id !== b.id));
      });
    }
  };

  return (
    <Button onClick={onClickDeleteHandler} isIconButton icon={faTrashCan} />
  );
};
