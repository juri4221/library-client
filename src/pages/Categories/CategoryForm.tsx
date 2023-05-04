import {
  ErrorMessage,
  Form,
  FormBody,
  FormGroup,
  Input,
} from '../../components/styles';
import { ModalFooter } from '../../components/Modal.styles';
import React, { useCallback, useState } from 'react';
import { Category } from '../../utils/types';
import { Button } from '../../components/Button';

interface CategoryFormProps {
  category?: Category;
  errorMessage?: string;
  isCreate?: boolean;
  isLoading?: boolean;
  onSubmit: (name: string, priority?: number) => void;
}
export const CategoryForm = ({
  category,
  errorMessage,
  isCreate,
  onSubmit,
  isLoading,
}: CategoryFormProps) => {
  const [name, setName] = useState(category?.name || '');
  const [priority, setPriority] = useState(category?.priority);

  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const isValid = useCallback(() => {
    const isNameValid = name.length > 0;
    if (!isNameValid) {
      setFieldErrors((prevFieldErrors) => ({
        ...prevFieldErrors,
        name: 'Category name can not be empty!',
      }));
    }

    const isPriorityValid = priority !== undefined;
    if (!isPriorityValid) {
      setFieldErrors((prevFieldErrors) => ({
        ...prevFieldErrors,
        priority: 'Priority can not be empty!',
      }));
    }
    return isNameValid && isPriorityValid;
  }, [priority, name]);

  const clearFields = () => {
    setName('undefined');
    setPriority(undefined);
  };
  const onChangePriorityHandler = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    if (event.target.value.length === 0) {
      setPriority(undefined);
      return;
    }

    const isOnlyNumbers = /^\d+$/.test(event.target.value);
    if (isOnlyNumbers) {
      setPriority(Number(event.target.value));
    }
  };

  const onChangeNameHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const onSaveClick = () => {
    if (isValid()) {
      clearFields();
      onSubmit(name, priority);
    }
  };

  return (
    <>
      <Form>
        <FormBody>
          <FormGroup>
            <label> Name:</label>
            <Input type="text" value={name} onChange={onChangeNameHandler} />
            {fieldErrors['name'] && (
              <ErrorMessage> {fieldErrors['name']}</ErrorMessage>
            )}
          </FormGroup>
          <FormGroup>
            <label>Priority:</label>
            <Input value={priority || ''} onChange={onChangePriorityHandler} />
            {fieldErrors['priority'] && (
              <ErrorMessage> {fieldErrors['priority']}</ErrorMessage>
            )}
          </FormGroup>
          {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        </FormBody>
      </Form>
      <ModalFooter>
        <Button onClick={onSaveClick} $outlined isLoading={isLoading}>
          {isCreate ? 'Create' : 'Update'} Category
        </Button>
      </ModalFooter>
    </>
  );
};
