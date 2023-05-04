import {
  ErrorMessage,
  Form,
  FormBody,
  FormGroup,
  Input,
  TextArea,
} from '../../components/styles';
import React, { useCallback, useState } from 'react';
import { Author } from '../../utils/types';
import { ModalFooter } from '../../components/Modal.styles';
import { Button } from '../../components/Button';

interface AuthorFormProps {
  author?: Author;
  errorMessage?: string;
  isLoading?: boolean;
  onSubmit: (name: string, bio: string) => void;
}

export const AuthorForm = ({
  author,
  errorMessage,
  isLoading,
  onSubmit,
}: AuthorFormProps) => {
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [fullName, setFullName] = useState(author?.fullName || '');
  const [bio, setBio] = useState(author?.bio || '');

  const isValid = useCallback(() => {
    const isAuthorNameValid = fullName.length > 0;
    if (!isAuthorNameValid) {
      setFieldErrors((prevFieldErrors) => ({
        ...prevFieldErrors,
        authorName: 'Author name can not be empty!',
      }));
    }

    const isBioValid = bio.length > 0;
    if (!isBioValid) {
      setFieldErrors((prevFieldErrors) => ({
        ...prevFieldErrors,
        bio: 'Bio can not be empty!',
      }));
    }
    return isAuthorNameValid && isBioValid;
  }, [bio, fullName]);

  const onChangeAuthorHandler = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setFullName(event.target.value);
  };

  const onChangeBioHandler = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setBio(event.target.value);
  };

  const clearFields = () => {
    setFullName('');
    setBio('');
  };

  const onSave = () => {
    if (isValid()) {
      clearFields();
      onSubmit(fullName, bio);
    }
  };

  return (
    <Form>
      <FormBody>
        <FormGroup>
          <label htmlFor="authorName">Name:</label>
          <Input
            type="text"
            onChange={onChangeAuthorHandler}
            value={fullName}
          />
          {fieldErrors['authorName'] && (
            <ErrorMessage> {fieldErrors['authorName']}</ErrorMessage>
          )}
        </FormGroup>
        <FormGroup>
          <label htmlFor="priority">Bio:</label>
          <TextArea onChange={onChangeBioHandler} value={bio} />
          {fieldErrors['bio'] && (
            <ErrorMessage> {fieldErrors['bio']}</ErrorMessage>
          )}
        </FormGroup>
      </FormBody>
      <ModalFooter>
        <Button onClick={onSave} $outlined isLoading={isLoading}>
          {author ? 'Edit' : 'Add'} author
        </Button>
      </ModalFooter>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </Form>
  );
};
