/* eslint-disable react/react-in-jsx-scope */

import styles from './styles.module.scss';

function BookList({ books }: any) {
  const listBooks = books.data?.page;

  return (
    <>
      {listBooks?.map((book: any) => (
        <div key={book.id} className={styles.bookContainer}>
          <div className={styles.book}>
            <img src={book.image_url} className={`m-bottom-4 ${styles.bookImage}`} />
            <div className={styles.bookCaption}>
              <p className={`m-bottom-2 ${styles.bookTitle}`}>{book.title}</p>
              <span>{book.author}</span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default BookList;
