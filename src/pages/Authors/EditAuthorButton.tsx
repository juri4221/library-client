import { Author } from '../../utils/types';
import { AuthorForm } from './AuthorForm';
import { useState } from 'react';
import { Modal } from '../../components/Modal';
import { useDataContext } from '../../contexts/DataContext';
import { useFetch } from '../../hooks/useFetch';
import { Button } from '../../components/Button';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

interface EditAuthorButtonProps {
  author: Author;
}
export const EditAuthorButton = ({ author }: EditAuthorButtonProps) => {
  const { setAuthors } = useDataContext();
  const { fetch, isLoading, errorMessage } = useFetch();

  const [isVisible, setIsVisible] = useState(false);
  const hideModal = () => setIsVisible(false);

  const onEditClickHandler = () => setIsVisible(true);

  const onUpdateSubmit = (fullName: string, bio: string) => {
    fetch<Author>({
      data: {
        fullName,
        bio,
      },
      url: `Authors/${author.id}`,
      method: 'PUT',
    }).then(({ data: updatedAuthors }) => {
      hideModal();
      setAuthors((prevAuthors) => {
        return [
          ...prevAuthors.map((prevAuthor) =>
            prevAuthor.id === author.id
              ? { ...prevAuthor, ...updatedAuthors }
              : prevAuthor,
          ),
        ];
      });
    });
  };

  return (
    <>
      <Button onClick={onEditClickHandler} isIconButton icon={faEdit} />
      <Modal isVisible={isVisible} onDismiss={hideModal} title="Edit Author">
        <AuthorForm
          author={author}
          onSubmit={onUpdateSubmit}
          isLoading={isLoading}
          errorMessage={errorMessage}
        />
      </Modal>
    </>
  );
};
