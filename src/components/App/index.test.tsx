import React from 'react';
import { render } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';

import App from '.';

const queryClient = new QueryClient();

describe('BookList component', () => {
  test('renders BookList', () => {
    const component = render(
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    );

    expect(component).toMatchSnapshot();
  });
});
