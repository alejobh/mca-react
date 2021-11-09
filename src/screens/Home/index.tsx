/* eslint-disable react/react-in-jsx-scope */
// import { useQuery } from 'react-query';

// import { getBooks } from 'services/BooksService';

import BookList from '../../components/BookList';

import styles from './styles.module.scss';

function Home() {
  return (
    <div className={styles.app}>
      <BookList />
    </div>
  );
}

export default Home;
