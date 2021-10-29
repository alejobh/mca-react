/* eslint-disable react/react-in-jsx-scope */
import { useQuery } from 'react-query';

import { getBooks } from 'services/BooksService';

import BookList from '../../components/BookList';

import styles from './styles.module.scss';

function Home() {
  const books = useQuery('books', getBooks);
  console.log(books);
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
