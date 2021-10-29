/* eslint-disable @typescript-eslint/naming-convention */
import api from '../config/api';

// const HEADERS_VALUES = {
//   ACCESS_TOKEN: 'access-token',
//   CLIENT: 'client',
//   UID: 'uid'
// };

const HEADERS = window.localStorage.getItem('headers');
console.log(HEADERS);

export const getBooks = () => api.get('/books', {});
