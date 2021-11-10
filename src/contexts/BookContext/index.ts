import { contextFactory } from '../../config/context';
import { Book } from '../../interfaces/interfaces';

export interface State {
  page: Book[];
}

export const INITIAL_STATE = {
  page: []
};

enum ActionTypes {
  SET_BOOKS = 'SET_BOOKS'
}

interface SetBooks {
  type: ActionTypes.SET_BOOKS;
  payload: Book[];
}

export type Action = SetBooks;

export const actionCreators = {
  setBooks: (page: Book[]): SetBooks => ({ type: ActionTypes.SET_BOOKS, payload: page })
};

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ActionTypes.SET_BOOKS: {
      return { ...state, page: action.payload };
    }
    default: {
      return state;
    }
  }
};

export const { useSelector, Context, useDispatch } = contextFactory<State, Action>(INITIAL_STATE);
