import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import { Router, Route } from 'react-router-dom';
import i18next from 'i18next';

import Header from './index';

describe('Header component', () => {
  test('render Header', () => {
    const component = render(<Header />);
    component.getByText(`${i18next.t('Header:logout')}`);
  });
  test('matches last snapshot', () => {
    const history = createMemoryHistory();
    history.push('/login');
    const component = render(
      <Router history={history}>
        <Route path="/login">
          <Header />
        </Route>
      </Router>
    );
    expect(component).toMatchSnapshot();
    userEvent.click(screen.getByRole('button', { name: `${i18next.t('Header:logout')}` }));
  });
});
