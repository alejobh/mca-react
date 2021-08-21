import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import 'scss/application.scss';
import Header from 'components/Header';
import Home from 'screens/Home';
import Login from 'screens/Login';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/">
          <Login />
        </Route>
        <Route path="/sign_up">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
