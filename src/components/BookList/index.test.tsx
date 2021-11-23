import React from 'react';
import { render } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import i18next from 'i18next';

import BookList from '.';

const queryClient = new QueryClient();

describe('BookList component', () => {
  test('renders BookList', () => {
    const component = render(
      <QueryClientProvider client={queryClient}>
        <BookList />
      </QueryClientProvider>
    );
    component.getByText(`${i18next.t('Global:loading')}...`);
    expect(component).toMatchSnapshot();
  });
});
