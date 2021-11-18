/* eslint-disable react/react-in-jsx-scope */
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import i18next from 'i18next';

import SignUp from '.';

const queryClient = new QueryClient();

describe('SignUp form', () => {
  test('renders SignUp', () => {
    const component = render(
      <QueryClientProvider client={queryClient}>
        <SignUp />
      </QueryClientProvider>
    );

    component.debug();
    expect(component.getByText(`${i18next.t('SignUp:signUpTitle')}`)).toBeInTheDocument();
    // console.log(component);
  });
});
