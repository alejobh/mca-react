import React from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.module.scss';

function Header() {
  return (
    <header>
      <nav>
        <ul className={styles.navbar}>
          <li className={styles.navbarItem}>
            <Link to="/login">Login</Link>
          </li>
          <li className={styles.navbarItem}>
            <Link to="/sign_up">Sign Up</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
