export interface LoginProps {
  email: string;
  password: string;
}

export type InputsValues = {
  email: string;
  password: string;
};

export enum UserFieldIds {
  EMAIL = 'email',
  PASSWORD = 'password'
}

/* eslint-disable @typescript-eslint/naming-convention */
export interface UserForm {
  email: string;
  password: string;
  password_confirmation: string;
  first_name: string;
  last_name: string;
  locale: string;
}

export interface Book {
  author?: string;
  createdAt?: string;
  editor?: string;
  genre?: string;
  id?: number;
  image_url?: string;
  title?: string;
  updatedAt?: string;
  year?: string;
}

export interface BookPage {
  page: Array<Book>;
}

/* eslint-enable @typescript-eslint/naming-convention */
