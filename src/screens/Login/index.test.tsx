import React from 'react';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { QueryClient, QueryClientProvider } from 'react-query';

import Login from './index';

const queryClient = new QueryClient();

describe('Login component', () => {
  test('matches last snapshot', () => {
    const component = render(
      <QueryClientProvider client={queryClient}>
        <Login />
      </QueryClientProvider>
    );

    expect(component).toMatchSnapshot();
    userEvent.type(screen.getByLabelText('SignUp:email'), 'test@gmail.com');
    userEvent.type(screen.getByLabelText('Login:password'), 'wolox1190');
  });
});
