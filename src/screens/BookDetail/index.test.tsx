import React from 'react';
import { render } from '@testing-library/react';
import { Router, Route, MemoryRouter } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { QueryClient, QueryClientProvider } from 'react-query';

import BookDetail from './index';

const queryClient = new QueryClient();
const history = createMemoryHistory();
history.push('/books/1');

describe('BookDetail component', () => {
  test('matches last snapshot', () => {
    const component = render(
      <MemoryRouter initialEntries={['/books/1']}>
        <Router history={history}>
          <Route path="/books/:id">
            <QueryClientProvider client={queryClient}>
              <BookDetail />
            </QueryClientProvider>
          </Route>
        </Router>
      </MemoryRouter>
    );

    component.getByText('Global:loading...');
    expect(component).toMatchSnapshot();
  });
});
