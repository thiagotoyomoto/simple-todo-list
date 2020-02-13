import styled, { keyframes } from 'styled-components';

interface ContainerProps {
  completed: boolean;
}

const uncompleteTodo = keyframes`
  from {
    color: #999;
  }

  to {
    color: #000;
  }
`;

const completeTodo = keyframes`
  from {
    color: #000;
  }

  to {
    color: #999;
  }
`;

export const Container = styled.li<ContainerProps>`
  display: flex;
  flex-direction: row;
  align-items: center;

  padding: 10px 10px;
  margin-bottom: 10px;

  border-radius: 8px;

  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15), 0 2px 2px rgba(0, 0, 0, 0.15),
    0 4px 4px rgba(0, 0, 0, 0.15);

  background: #c6caed;

  div:nth-child(2) {
    flex: 1;
    margin: 0 10px;

    .default-text {
      line-height: 24px;
      font-size: 18px;
    }

    label {
      word-wrap: break-word;
      word-break: break-all;

      min-height: 24px;
      text-decoration-line: ${props =>
        props.completed ? 'line-through' : 'none'};
      color: ${props => (props.completed ? '#999' : '#000')};

      animation: ${props => (props.completed ? completeTodo : uncompleteTodo)}
        200ms linear 1;
    }

    input {
      height: 24px;
      border: none;
      width: 100%;
      background: #c6caed;
    }
  }

  div:nth-child(3) {
    width: 30px;
    height: 30px;
    cursor: grab;
  }
`;
