/* eslint-disable react/react-in-jsx-scope */
import i18next from 'i18next';
import { Link } from 'react-router-dom';

import styles from './styles.module.scss';

function Header() {
  return (
    <header>
      <nav>
        <ul className={`row center middle full-width ${styles.navbar}`}>
          <li className={styles.navbarItem}>
            <Link to="/" className={styles.navbarLink}>
              {i18next.t('Global:login')}
            </Link>
          </li>
          <li className={styles.navbarItem}>
            <Link to="/sign_up" className={styles.navbarLink}>
              {i18next.t('Header:signUp')}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
