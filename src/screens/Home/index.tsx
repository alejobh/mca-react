/* eslint-disable react/react-in-jsx-scope */
import { useQuery } from 'react-query';

import { getBooks } from 'services/BooksService';

import BookList from '../../components/BookList';

import styles from './styles.module.scss';

function Home() {
  const books = useQuery('books', getBooks);
  const page = books.data?.data;
  page ? console.log('books home', page) : null;

  return (
    <div className={styles.app}>
      <BookList />
      <BookList />
      <BookList />
      <BookList />
      <BookList />
      <BookList />
      <BookList />
    </div>
  );
}

export default Home;
