import React from 'react';

import styles from './styles.module.scss';
import SignUp from './components/SignUp';

function Home() {
  return (
    <div className={styles.app}>
      <SignUp />
    </div>
  );
}

export default Home;
