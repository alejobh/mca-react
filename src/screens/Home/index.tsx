/* eslint-disable react/react-in-jsx-scope */
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
