/* eslint-disable @typescript-eslint/naming-convention */
import { create } from 'apisauce';

import { HEADERS } from '../constants/constants';

interface BookPage {
  page: Array<{
    id: number;
    author: string;
    title: string;
    imageUrl: string;
  }>;
}

const { token, client, uid } = HEADERS;
const ACCESS_TOKEN = token;

const baseURL = process.env.REACT_APP_API_BASE_URL;

const headers = create({ baseURL, headers: { 'access-token': ACCESS_TOKEN, client, uid } });

export const getBooks = () => headers.get<BookPage>('/books', {});
