/* eslint-disable react/react-in-jsx-scope */

import { Book, BookPage } from 'interfaces/interfaces';

// import { BookPage } from '../../services/BooksService';

import styles from './styles.module.scss';

function BookList(books: BookPage) {
  const listBooks = books.page;

  return (
    <>
      {listBooks?.map(({ id, imageUrl, title, author }: Book) => (
        <div key={id} className={styles.bookContainer}>
          <div className={styles.book}>
            <img src={imageUrl} className={`m-bottom-4 ${styles.bookImage}`} />
            <div className={styles.bookCaption}>
              <p className={`m-bottom-2 ${styles.bookTitle}`}>{title}</p>
              <span>{author}</span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default BookList;
