/* eslint-disable react/react-in-jsx-scope */
import i18next from 'i18next';
import { useHistory, useParams } from 'react-router';
import { useQuery } from 'react-query';

import { getBook } from 'services/BooksService';
import { Book } from 'interfaces/interfaces';

import iconBack from '../../assets/chevron.png';

import styles from './styles.module.scss';

function BookDetail() {
  const { id } = useParams<any>();
  const history = useHistory();
  const { isLoading, data, isError } = useQuery(['book', id], () => getBook(id));

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: Error</span>;
  }

  // eslint-disable-next-line @typescript-eslint/naming-convention
  const { author, title, genre, editor, year, image_url }: Book = data?.data || {};

  const handleBack = () => {
    history.push('/');
  };

  return (
    <div className={`column center ${styles.container}`}>
      <button type="button" onClick={handleBack} className="row middle self-start m-bottom-9">
        <img src={iconBack} className={`m-right-4 ${styles.iconBack}`} />
        <span className={styles.buttonBackText}>{i18next.t('BookDetail:back')}</span>
      </button>
      <div className={`row ${styles.bookDetailContainer}`}>
        <img src={image_url} className={`m-right-4 ${styles.bookImage}`} />
        <div className={`column ${styles.bookCaption}`}>
          <div className={`m-bottom-4 ${styles.titleContainer}`}>
            <p className={`m-right-2 ${styles.bookTitle}`}>{title}</p>
            <span className={styles.bookGenre}>{genre}</span>
          </div>
          <div className={`m-bottom-4 ${styles.bookInfo}`}>
            <span className={`m-right-2 ${styles.bookInfoTitle}`}>
              {`${i18next.t('BookDetail:author')}:`}
            </span>
            <span className={styles.bookInfoContent}>{author}</span>
          </div>
          <div className={`m-bottom-4 ${styles.bookInfo}`}>
            <span className={`m-right-2 ${styles.bookInfoTitle}`}>
              {`${i18next.t('BookDetail:editorial')}:`}
            </span>
            <span className={styles.bookInfoContent}>{editor}</span>
          </div>
          <div className={styles.bookInfo}>
            <span className={`m-right-2 ${styles.bookInfoTitle}`}>
              {`${i18next.t('BookDetail:yearPublication')}:`}
            </span>
            <span className={styles.bookInfoContent}>{year}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookDetail;
