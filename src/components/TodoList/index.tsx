import React, { useState, useEffect, useMemo } from 'react';
import TodoInput from '../TodoInput';

import { Container } from './styles';
import TodoListItem from '../TodoListItem';
import { useSelector } from 'react-redux';

import { Todos } from '../../store/ducks/todos';
import { Reducers } from '../../store/ducks';

const TodoList: React.FC = () => {
  const todos = useSelector<Reducers, Todos>(state => state.todos);

  return (
    <Container>
      <TodoInput />
      {todos.length === 0 ? (
        <p>
          <i>Lista vazia</i>
        </p>
      ) : (
        <ul>
          {todos.map(todo => (
            <TodoListItem
              key={todo.id}
              initialCompleted={todo.completed}
              initialText={todo.text}
            />
          ))}
        </ul>
      )}
    </Container>
  );
};

export default TodoList;
