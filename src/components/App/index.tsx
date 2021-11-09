/* eslint-disable react/react-in-jsx-scope */

import 'scss/application.scss';
import { useReducer } from 'react';

import Routes from 'components/Routes';

import { reducer as booksReducer, INITIAL_STATE, Context } from '../../contexts/BookContext';

function App() {
  const [booksState, bookDispatch] = useReducer(booksReducer, INITIAL_STATE);

  return (
    <Context.Provider value={{ state: booksState, dispatch: bookDispatch }}>
      <Routes />
    </Context.Provider>
  );
}

export default App;
