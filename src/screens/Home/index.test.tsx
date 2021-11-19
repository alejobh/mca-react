import React from 'react';
import { render } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';

import Home from './index';

const queryClient = new QueryClient();

describe('Home component', () => {
  test('matches last snapshot', () => {
    const component = render(
      <QueryClientProvider client={queryClient}>
        <Home />
      </QueryClientProvider>
    );
    expect(component).toMatchSnapshot();
  });
});
