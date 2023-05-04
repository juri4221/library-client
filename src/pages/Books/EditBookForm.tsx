import { Author, Book } from '../../utils/types';
import { BookForm } from './BookForm';
import { useFetch } from '../../hooks/useFetch';
import { useDataContext } from '../../contexts/DataContext';
import { useEffect, useState } from 'react';
import { getBase64FromUrl } from '../../utils/utils';

interface EditBookFormProps {
  book: Book;
  onSuccess?: () => void;
}
export const EditBookForm = ({ book, onSuccess }: EditBookFormProps) => {
  const { setBooks } = useDataContext();
  const { fetch, isLoading, errorMessage } = useFetch();

  const [imageSourceBase64, setImageSourceBase64] = useState<
    string | undefined
  >();

  useEffect(() => {
    async function getImageBase64() {
      const base64 = await getBase64FromUrl(
        `http://localhost:5233/${book?.imageSource}`,
      );
      setImageSourceBase64(base64.substring(22));
    }
    if (book) {
      getImageBase64();
    }
  }, [book]);

  const onUpdateSubmit = (
    name: string,
    description: string,
    imageSource: string,
    categoryIds: number[],
    authorId: number,
  ) => {
    fetch<Author>({
      data: {
        name,
        description,
        imageSource,
        categoryIds,
        authorId,
      },
      url: `Books/${book.id}`,
      method: 'PUT',
    }).then(({ data: updatedBook }) => {
      setBooks((prevBooks) => {
        const prevBook = prevBooks.find((b) => {
          return b.id === book.id;
        });

        if (!prevBook) {
          return prevBooks;
        }

        return [
          ...prevBooks.map((prevBook) => {
            if (prevBook.id === book.id) {
              return { ...prevBook, ...updatedBook };
            }
            return prevBook;
          }),
        ];
      });
      onSuccess && onSuccess();
    });
  };

  return imageSourceBase64 ? (
    <BookForm
      book={{ ...book, imageSource: imageSourceBase64 }}
      isLoading={isLoading}
      onSubmit={onUpdateSubmit}
      errorMessage={errorMessage}
    />
  ) : null;
};
