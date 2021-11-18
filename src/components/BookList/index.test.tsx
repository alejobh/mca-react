import React from 'react';
import { render } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';

import BookList from '.';

const queryClient = new QueryClient();

// const wrapper = (children: React.ReactElement) => {
//   <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
// };

describe('BookList component', () => {
  test('renders BookList', () => {
    const component = render(
      <QueryClientProvider client={queryClient}>
        <BookList />
      </QueryClientProvider>
    );
    component.debug();
    // console.log(component);
  });
});
