import React from 'react';
import { useHistory } from 'react-router-dom';

import LogoWolox from '../../assets/LogoWolox-Original.png';

import styles from './styles.module.scss';

function Header() {
  const history = useHistory();

  const logout = () => {
    localStorage.getItem('access-token') && localStorage.removeItem('access-token');
    history.replace('/login');
  };

  return (
    <header>
      <nav className={styles.navbar}>
        <img src={LogoWolox} />
        <button type="button" onClick={logout} className={styles.logoutButton}>
          Logout
        </button>
      </nav>
    </header>
  );
}

export default Header;
