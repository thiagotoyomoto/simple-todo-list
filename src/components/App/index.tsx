import React from 'react';
import TodoList from '../TodoList';
import { Container } from './styles';

import { Provider } from 'react-redux';
import store from '../../store';

const App = () => {
  return (
    <Provider store={store}>
      <Container>
        <TodoList />
      </Container>
    </Provider>
  );
};

export default App;
