/* eslint-disable react/react-in-jsx-scope */
import i18next from 'i18next';
import { useParams } from 'react-router';

import { useSelector } from 'contexts/BookContext';

import Logo from '../../assets/LogoWolox-Original.png';

import styles from './styles.module.scss';

function BookDetail() {
  const { id } = useParams<any>();
  console.log(id);
  // const { isLoading, data, isError, error } = useQuery('book', getBook);
  // const book = data || {};
  // console.log('data', data);
  const books = useSelector(state => state.page);
  const filterBook = (idBook: any) => books.find(item => item.id === parseInt(idBook));

  console.log('function', filterBook(id));

  return (
    <div className={`column center ${styles.container}`}>
      <button type="button" className="self-start">
        {i18next.t('BookDetail:back')}
      </button>
      <div className={`row ${styles.bookDetailContainer}`}>
        <img src={Logo} className={`m-right-2 ${styles.bookImage}`} />
        <div className={`column ${styles.bookCaption}`}>
          <div className={`m-bottom-3 ${styles.titleContainer}`}>
            {/* <p className={`m-right-2 ${styles.bookTitle}`}>{book.title}</p> */}
            {/* <span className={styles.bookGenre}>{book.genre}</span> */}
          </div>
          <div className={`m-bottom-3 ${styles.bookInfo}`}>
            <span className={`m-right-2 ${styles.bookInfoTitle}`}>
              {`${i18next.t('BookDetail:author')}:`}
            </span>
            {/* <span className={styles.bookAuthor}>{book.author}</span> */}
          </div>
          <div className={`m-bottom-3 ${styles.bookInfo}`}>
            <span className={`m-right-2 ${styles.bookInfoTitle}`}>
              {`${i18next.t('BookDetail:editorial')}:`}
            </span>
            {/* <span className={styles.bookAuthor}>{book.editor}</span> */}
          </div>
          <div className={styles.bookInfo}>
            <span className={`m-right-2 ${styles.bookInfoTitle}`}>
              {i18next.t('BookDetail:yearPublication')}
            </span>
            {/* <span className={styles.bookAuthor}>{book.year}</span> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookDetail;
