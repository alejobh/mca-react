/* eslint-disable react/react-in-jsx-scope */
import { useQuery } from 'react-query';

import { getBooks } from 'services/BooksService';

import BookList from '../../components/BookList';

import styles from './styles.module.scss';

function Home() {
  const { isLoading, data } = useQuery('books', getBooks);

  return (
    <div className={styles.app}>
      {isLoading ? <span className={styles.loading}>Loading...</span> : <BookList books={data} />}
    </div>
  );
}

export default Home;
