import React, { useState, useRef, useEffect } from 'react';

import { Container } from './styles';

import { Icon } from '@iconify/react';
import dragIcon from '@iconify/icons-mdi/drag';
import Checkbox from '../Checkbox';

export interface PropsType {
  initialCompleted?: boolean;
  initialText?: string;
}

enum ListItemMode {
  Normal,
  Edit,
}

const TodoListItem: React.FC<PropsType> = ({
  initialCompleted = false,
  initialText = '',
}) => {
  const [mode, setMode] = useState<ListItemMode>(ListItemMode.Normal);
  const [completed, setCompleted] = useState<boolean>(initialCompleted);
  const [text, setText] = useState<string>(initialText);

  const inputRef = useRef<HTMLInputElement>(null);
  const oldText = useRef<string>(text);

  function handleDoubleClick() {
    setMode(ListItemMode.Edit);
  }

  function handleCheckboxChange(value: boolean) {
    setCompleted(value);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMode(ListItemMode.Normal);

    setText(text.trim());

    if (oldText.current !== text) {
      console.log('Modified');
    }
  }

  function handleBlur() {
    setMode(ListItemMode.Normal);

    setText(text.trim());

    if (oldText.current !== text) {
      console.log('Modified');
    }
  }

  function handleFocus() {
    oldText.current = text;
  }

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setText(event.target.value);
  }

  return (
    <Container completed={completed}>
      <Checkbox checked={completed} onChange={handleCheckboxChange} />
      <div>
        {mode === ListItemMode.Normal ? (
          <label className='default-text' onDoubleClick={handleDoubleClick}>
            {text}
          </label>
        ) : (
          <form onSubmit={handleSubmit}>
            <input
              className='default-text'
              type='text'
              ref={inputRef}
              onFocus={handleFocus}
              onBlur={handleBlur}
              value={text}
              onChange={handleInputChange}
              autoFocus
            />
          </form>
        )}
      </div>
      <div>
        <Icon icon={dragIcon} width={30} />
      </div>
    </Container>
  );
};

export default TodoListItem;
