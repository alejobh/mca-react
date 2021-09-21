/* eslint-disable react/react-in-jsx-scope */
import i18next from 'i18next';

import styles from './styles.module.scss';

function Login() {
  return (
    <div className={`row center middle full-width full-height ${styles.login}`}>
      {i18next.t('Login:logintitle')}
    </div>
  );
}

export default Login;
