import { useCallback } from 'react';
import { Author } from '../../utils/types';
import { useDataContext } from '../../contexts/DataContext';
import { useFetch } from '../../hooks/useFetch';
import { AuthorForm } from './AuthorForm';

interface CreateAuthorFormProps {
  onSuccess: () => void;
}
export const CreateAuthorForm = ({ onSuccess }: CreateAuthorFormProps) => {
  const { authors, setAuthors } = useDataContext();
  const { fetch, isLoading, errorMessage } = useFetch();

  const onCreateSubmit = useCallback(
    (fullName: string, bio: string) => {
      fetch<Author>({
        data: {
          fullName,
          bio,
        },
        url: 'Authors',
        method: 'POST',
      }).then(({ data: newAuthor }) => {
        onSuccess();
        setAuthors([...authors, newAuthor]);
      });
    },
    [fetch, onSuccess, setAuthors, authors],
  );

  return (
    <AuthorForm
      onSubmit={onCreateSubmit}
      isLoading={isLoading}
      errorMessage={errorMessage}
    />
  );
};
