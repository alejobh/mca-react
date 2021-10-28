import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import Header from '../Header';

// eslint-disable-next-line react/prop-types
function PrivateRoute({ component: Component, ...rest }) {
  const auth = window.localStorage.getItem('access-token');

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
