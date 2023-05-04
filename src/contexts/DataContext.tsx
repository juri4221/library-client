import React, { createContext, useContext } from 'react';
import { useCategories } from '../hooks/useCategories';
import { Author, Book, Category } from '../utils/types';
import { useBooks } from '../hooks/useBooks';
import { useAuthors } from '../hooks/useAuthors';

interface DataContextValue {
  categories: Category[];
  books: Book[];
  authors: Author[];
  setCategories: React.Dispatch<React.SetStateAction<Category[]>>;
  setBooks: React.Dispatch<React.SetStateAction<Book[]>>;
  setAuthors: React.Dispatch<React.SetStateAction<Author[]>>;
}

export const DataContext = createContext<DataContextValue>({
  categories: [],
  books: [],
  authors: [],
  setCategories: () => null,
  setBooks: () => null,
  setAuthors: () => null,
});

interface DataContextProviderProps {
  children: React.ReactNode;
}

export const DataContextProvider = ({ children }: DataContextProviderProps) => {
  const { categories, setCategories } = useCategories();
  const { books, setBooks } = useBooks();
  const { authors, setAuthors } = useAuthors();

  return (
    <DataContext.Provider
      value={{
        categories,
        setCategories,
        books,
        setBooks,
        authors,
        setAuthors,
      }}>
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => {
  return useContext(DataContext);
};
