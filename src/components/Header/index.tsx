/* eslint-disable react/react-in-jsx-scope */
import { useHistory } from 'react-router-dom';
import i18next from 'i18next';

import { HEADERS } from '../../constants/constants';
import LogoWolox from '../../assets/LogoWolox-Original.png';

import styles from './styles.module.scss';

function Header() {
  const history = useHistory();

  const handleLogout = () => {
    HEADERS['access-token'] && localStorage.removeItem('headers');
    history.replace('/login');
  };

  return (
    <header>
      <nav className={styles.navbar}>
        <img src={LogoWolox} />
        <button type="button" onClick={handleLogout} className={styles.logoutButton}>
          {i18next.t('Header:logout')}
        </button>
      </nav>
    </header>
  );
}

export default Header;
