export interface BaseModel {
  id: number;
  createdBy: string;
  createdAt: string;
  modifiedBy: null | string;
  modifiedAt: null | string;
}

export interface Author extends BaseModel {
  fullName: string;
  bio: string;
  books: Book[];
}

export interface Category extends BaseModel {
  name: string;
  priority: number;
  books: Book[];
}

export interface Book extends BaseModel {
  id: number;
  name: string;
  description: string;
  imageSource: string;
  authorId: Author['id'];
  categoryIds: Category['id'][];
  author: Author;
  categories: Category[];
}

export interface Option {
  value: number;
  label: string;
}
