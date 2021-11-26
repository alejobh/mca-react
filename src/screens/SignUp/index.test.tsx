import React from 'react';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { QueryClient, QueryClientProvider } from 'react-query';

import SignUp from './index';

const queryClient = new QueryClient();

describe('SignUp screen', () => {
  test('matches last snapshot', () => {
    const component = render(
      <QueryClientProvider client={queryClient}>
        <SignUp />
      </QueryClientProvider>
    );

    expect(component).toMatchSnapshot();
    userEvent.type(screen.getByLabelText('SignUp:firstName'), 'Test Name');
    userEvent.type(screen.getByLabelText('SignUp:lastName'), 'Test LastName');
    userEvent.type(screen.getByLabelText('SignUp:email'), 'test@gmail.com');
    userEvent.type(screen.getByLabelText('SignUp:password'), 'wolox1189');
    userEvent.type(screen.getByLabelText('SignUp:passwordConfirmation'), 'wolox1189');
  });
});
