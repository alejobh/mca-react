import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import Header from '../Header';

// eslint-disable-next-line react/prop-types
export const HEADERS = JSON.parse(window.localStorage.getItem('headers'));
// eslint-disable-next-line react/prop-types
function PrivateRoute({ component: Component, ...rest }) {
  // const { client, uid } = HEADERS;
  // console.log(client, uid);
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
