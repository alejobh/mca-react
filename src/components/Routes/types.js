import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import { HEADERS } from '../../constants/constants';
import Header from '../Header';

// eslint-disable-next-line react/prop-types
function PrivateRoute({ component: Component, ...rest }) {
  const auth = HEADERS['access-token'];

  return (
    <Route {...rest}>
      {auth ? (
        <>
          <Header />
          <Component />
        </>
      ) : (
        <Redirect to="/login" />
      )}
    </Route>
  );
}

export default PrivateRoute;
