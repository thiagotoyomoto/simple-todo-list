import { combineReducers } from 'redux';

import todos, { Todos } from './todos';

export interface Reducers {
  todos: Todos;
}

export default combineReducers({
  todos,
});
