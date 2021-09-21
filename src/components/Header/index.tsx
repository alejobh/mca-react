import i18next from 'i18next';
import React from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.module.scss';

function Header() {
  return (
    <header>
      <nav>
        <ul className={`row center middle full-width ${styles.navbar}`}>
          <li className={styles.navbarItem}>
            <Link to="/">{i18next.t('Header:login')}</Link>
          </li>
          <li className={styles.navbarItem}>
            <Link to="/sign_up">{i18next.t('Header:signUp')}</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
