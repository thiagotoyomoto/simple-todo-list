import React, { useState, useRef } from 'react';

import { Container } from './styles';
import { useDispatch } from 'react-redux';

import { Creators as Todos } from '../../store/ducks/todos';

import { Icon } from '@iconify/react';
import plusThick from '@iconify/icons-mdi/plus-thick';

const TodoInput: React.FC = () => {
  const dispatch = useDispatch();
  const inputRef = useRef<HTMLInputElement>(null);

  const [text, setText] = useState('');

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (text !== '') {
      inputRef.current?.blur();

      dispatch(Todos.add(text));
      setText('');
    }
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={text}
          onChange={event => setText(event.target.value)}
        />
        <button type='submit'>
          <Icon width={24} icon={plusThick} />
        </button>
      </form>
    </Container>
  );
};

export default TodoInput;
