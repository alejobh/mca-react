/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable react/react-in-jsx-scope */

import { Book } from 'interfaces/interfaces';

import styles from './styles.module.scss';

interface Props {
  books?: Book[];
}

function BookList({ books }: Props) {
  return (
    <>
      {books?.map(({ id, image_url, title, author }: Book) => (
        <div key={id} className={styles.bookContainer}>
          <div className={styles.book}>
            <img src={image_url} className={`m-bottom-4 ${styles.bookImage}`} />
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
