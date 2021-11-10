/* eslint-disable @typescript-eslint/naming-convention */
import { create } from 'apisauce';

import { Book, BookPage } from '../interfaces/interfaces';
import { HEADERS } from '../constants/constants';

const { token, client, uid } = HEADERS;
const ACCESS_TOKEN = token;

const baseURL = process.env.REACT_APP_API_BASE_URL;

const headers = create({ baseURL, headers: { 'access-token': ACCESS_TOKEN, client, uid } });

export const getBooks = () => headers.get<BookPage>('/books', {});

export const getBook = (id: any) => headers.get<Book>(`/books/${id}`, {});
