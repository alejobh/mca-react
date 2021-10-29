/* eslint-disable react/react-in-jsx-scope */

import styles from './styles.module.scss';

function BookList() {
  return (
    <div className={styles.bookContainer}>
      <div className={styles.book}>
        <div className={`m-bottom-2 ${styles.bookImage}`} />
        <div className={styles.bookCaption}>
          <p className={`m-bottom-2 ${styles.bookTitle}`}>Titulo del libro</p>
          <span>Autor del libros</span>
        </div>
      </div>
    </div>
  );
}

export default BookList;
