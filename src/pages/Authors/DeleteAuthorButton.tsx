import { Author } from '../../utils/types';
import { useFetch } from '../../hooks/useFetch';
import { useDataContext } from '../../contexts/DataContext';
import { Button } from '../../components/Button';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

interface DeleteAuthorButtonProps {
  author: Author;
}
export const DeleteAuthorButton = ({ author }: DeleteAuthorButtonProps) => {
  const { setAuthors } = useDataContext();
  const { fetch } = useFetch();

  const onClickDeleteHandler = () => {
    if (author.books.length > 0) {
      alert(
        'This can not be deleted because there books authored by him in our library!',
      );
      return;
    }
    if (window.confirm('Are you sure you want to delete this author?')) {
      fetch({
        url: `Authors/${author.id}`,
        method: 'DELETE',
      }).then(() => {
        setAuthors((prevAuthors) =>
          prevAuthors.filter((a) => author.id !== a.id),
        );
      });
    }
  };

  return (
    <Button onClick={onClickDeleteHandler} isIconButton icon={faTrashCan} />
  );
};
