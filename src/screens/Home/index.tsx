/* eslint-disable react/react-in-jsx-scope */
import { useQuery } from 'react-query';

import { getBooks } from 'services/BooksService';

import BookList from '../../components/BookList';

import styles from './styles.module.scss';

function Home() {
  const { isLoading, data } = useQuery('books', getBooks);

  console.log('data', data?.data?.page);

  return (
    <div className={styles.app}>
      {isLoading ? <span className={styles.loading}>Loading...</span> : <BookList books={data?.data?.page} />}
    </div>
  );
}

export default Home;
