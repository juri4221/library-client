import {
  ErrorMessage,
  Form,
  FormBody,
  FormGroup,
  Input,
  TextArea,
} from '../../components/styles';
import Select, { MultiValue, SingleValue } from 'react-select';
import React, { useCallback, useState } from 'react';
import { Book, Option } from '../../utils/types';
import { useDataContext } from '../../contexts/DataContext';
import { ModalFooter } from '../../components/Modal.styles';
import { ImageInput } from '../../components/ImageInput';
import { Button } from '../../components/Button';

interface BookFormProps {
  book?: Book;
  errorMessage?: string;
  isLoading?: boolean;
  onSubmit: (
    name: string,
    description: string,
    imageSource: string,
    selectedCategories: number[],
    selectedAuthor: number,
  ) => void;
}

export const BookForm = ({
  book,
  onSubmit,
  isLoading,
  errorMessage,
}: BookFormProps) => {
  const { categories, authors } = useDataContext();

  const existingSelectedCategories: Option[] = book
    ? book.categories.map((category) => ({
        value: category.id,
        label: category.name,
      }))
    : [];

  const existingAuthor: Option | undefined = book?.author
    ? {
        value: book?.author.id,
        label: book?.author.fullName,
      }
    : undefined;

  const [name, setName] = useState(book?.name || '');
  const [description, setDescription] = useState(book?.description || '');
  const [imageSource, setImageSource] = useState(book?.imageSource);
  const [selectedAuthor, setSelectedAuthor] = useState(existingAuthor);
  const [selectedCategories, setSelectedCategories] = useState(
    existingSelectedCategories,
  );

  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const onChangeBookHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const onChangeDescriptionHandler = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setDescription(event.target.value);
  };

  const onChangeCategoriesHandler = (newValues: MultiValue<Option>) => {
    setSelectedCategories(newValues as Option[]);
  };

  const onChangeAuthorHandler = (newValue: SingleValue<Option>) => {
    setSelectedAuthor(newValue || undefined);
  };

  const onChoseImageHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();

    reader.onload = () => {
      const base64Image = reader.result?.toString().split(',')[1];
      setImageSource(base64Image ? base64Image : '');
    };
    if (event.target.files?.[0]) {
      reader.readAsDataURL(event.target.files?.[0]);
    }
  };

  const isValid = useCallback(() => {
    const isBookNameValid = name.length > 0;
    if (!isBookNameValid) {
      setFieldErrors((prevFieldErrors) => ({
        ...prevFieldErrors,
        name: 'Book name can not be empty!',
      }));
    }

    const isAuthorValid = selectedAuthor !== undefined;
    if (!isAuthorValid) {
      setFieldErrors((prevFieldErrors) => ({
        ...prevFieldErrors,
        author: 'You must select authors',
      }));
    }

    const isCategoriesValid =
      selectedCategories && selectedCategories.length > 0;
    if (!isCategoriesValid) {
      setFieldErrors((prevFieldErrors) => ({
        ...prevFieldErrors,
        categories: 'You must select categories',
      }));
    }

    const isImageValid = imageSource !== undefined;
    if (!isImageValid) {
      setFieldErrors((prevFieldErrors) => ({
        ...prevFieldErrors,
        image: 'You must add an image',
      }));
    }

    const isDescriptionValid = description.length > 0;
    if (!isDescriptionValid) {
      setFieldErrors((prevFieldErrors) => ({
        ...prevFieldErrors,
        description: 'Description can not be empty!',
      }));
    }
    return (
      isBookNameValid &&
      isAuthorValid &&
      isCategoriesValid &&
      isImageValid &&
      isDescriptionValid
    );
  }, [name, selectedAuthor, selectedCategories, imageSource, description]);

  const clearForm = () => {
    setName('');
    setSelectedAuthor(undefined);
    setSelectedCategories([]);
    setDescription('');
    setImageSource(undefined);
  };

  const onSave = () => {
    if (isValid()) {
      clearForm();
      onSubmit(
        name,
        description,
        imageSource!,
        selectedCategories?.map((category) => category.value),
        selectedAuthor!.value,
      );
    }
  };
  return (
    <Form>
      <FormBody>
        <FormGroup>
          <label htmlFor="bookName">Book Name:</label>
          <Input type="text" onChange={onChangeBookHandler} value={name} />
          {fieldErrors['name'] && (
            <ErrorMessage> {fieldErrors['name']}</ErrorMessage>
          )}
        </FormGroup>
        <FormGroup>
          <label>Categories:</label>
          <Select
            classNamePrefix="react-select"
            className="react-select-container"
            onChange={onChangeCategoriesHandler}
            value={selectedCategories}
            isMulti
            name="colors"
            options={categories.map((category) => ({
              value: category.id,
              label: category.name,
            }))}
          />

          {fieldErrors['categories'] && (
            <ErrorMessage> {fieldErrors['categories']}</ErrorMessage>
          )}
        </FormGroup>
        <FormGroup>
          <label>Author:</label>
          <Select
            classNamePrefix="react-select"
            className="react-select-container"
            value={selectedAuthor}
            onChange={onChangeAuthorHandler}
            name="color"
            options={authors.map((author) => ({
              value: author.id,
              label: author.fullName,
            }))}
          />
          {fieldErrors['author'] && (
            <ErrorMessage> {fieldErrors['author']}</ErrorMessage>
          )}
        </FormGroup>
        <FormGroup>
          <label htmlFor="description">Description:</label>
          <TextArea onChange={onChangeDescriptionHandler} value={description} />
          {fieldErrors['description'] && (
            <ErrorMessage> {fieldErrors['description']}</ErrorMessage>
          )}
        </FormGroup>
        <FormGroup>
          <label htmlFor="description">Image:</label>
          <ImageInput
            imageSource={imageSource}
            onChangeHandler={onChoseImageHandler}
          />
          {fieldErrors['image'] && (
            <ErrorMessage> {fieldErrors['image']}</ErrorMessage>
          )}
        </FormGroup>
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </FormBody>
      <ModalFooter>
        <Button onClick={onSave} $outlined isLoading={isLoading}>
          {book ? 'Edit' : 'Add'} book
        </Button>
      </ModalFooter>
    </Form>
  );
};
