import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import styles from './styles.module.scss';
import SignUp from './components/SignUp';

function Home() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <div className={`m-top-2 ${styles.app}`}>
        <SignUp />
      </div>
    </QueryClientProvider>
  );
}

export default Home;
