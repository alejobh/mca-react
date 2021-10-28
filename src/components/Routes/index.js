/* eslint-disable react/react-in-jsx-scope */
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import routes from './routes';
import PrivateRoute from './types';

function Routes() {
  const queryClient = new QueryClient();
  console.log(routes.private);
  return (
    <Router>
      <QueryClientProvider client={queryClient}>
        <div>
          <Switch>
            {routes.private.map(({ path, component, name }) => (
              <PrivateRoute exact key={name} path={path} component={component} />
            ))}
            {routes.public.map(({ path, component, name }) => (
              <Route exact path={path} component={component} key={name} />
            ))}
          </Switch>
        </div>
      </QueryClientProvider>
    </Router>
  );
}

export default Routes;