import React from 'react';
import { render } from '@testing-library/react';

import Header from '.';

describe('Header component', () => {
  test('render Header', () => {
    const component = render(<Header />);
    component.debug();
  });
});
