/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable react/react-in-jsx-scope */

import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useQuery } from 'react-query';

import { Book } from 'interfaces/interfaces';
import { actionCreators, useDispatch, useSelector } from 'contexts/BookContext';
import { getBooks } from 'services/BooksService';

import styles from './styles.module.scss';

function BookList() {
  const { isLoading, data, isError } = useQuery('books', getBooks);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const page = data?.data?.page ? data?.data.page : [];
  const books = useSelector(state => state.page);
  console.log('state', books);
  const dispatch = useDispatch();

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: error</span>;
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    dispatch(actionCreators.setBooks(page));
  }, [page, dispatch]);
  return (
    <>
      {books?.map(({ id, image_url, title, author }: Book) => (
        <Link to={`/books/${id}`} key={id}>
          <div className={styles.bookContainer}>
            <div className={styles.book}>
              <img src={image_url} className={`m-bottom-4 ${styles.bookImage}`} />
              <div className={styles.bookCaption}>
                <p className={`m-bottom-2 ${styles.bookTitle}`}>{title}</p>
                <span>{author}</span>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
}

export default BookList;
