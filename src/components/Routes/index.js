/* eslint-disable react/react-in-jsx-scope */
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import routes from './routes';
import PrivateRoute from './types';

function Routes() {
  const queryClient = new QueryClient();
  return (
    <Router>
      <QueryClientProvider client={queryClient}>
        <Switch>
          {routes.private.map(({ path, component, name }) => (
            <PrivateRoute exact key={name} path={path} component={component} />
          ))}
          {routes.public.map(({ path, component, name }) => (
            <Route exact path={path} component={component} key={name} />
          ))}
        </Switch>
      </QueryClientProvider>
    </Router>
  );
}

export default Routes;
