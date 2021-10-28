/* eslint-disable react/react-in-jsx-scope */
import Login from './components/Login';
import styles from './styles.module.scss';

function Home() {
  return (
    <div className={styles.app}>
      <Login />
    </div>
  );
}

export default Home;
