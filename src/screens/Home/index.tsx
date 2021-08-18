import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import SignUp from './components/SignUp';
import styles from './styles.module.scss';

function Home() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <div className={styles.app}>
        <SignUp />
      </div>
    </QueryClientProvider>
  );
}

export default Home;
