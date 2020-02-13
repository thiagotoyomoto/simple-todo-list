export const Types = {
  ADD: 'todos/ADD',
  EDIT: 'todos/EDIT',
  REMOVE: 'todos/REMOVE',
};

export interface Todo {
  id: number;
  completed: boolean;
  text: string;
}

export type Todos = Todo[];

const INITIAL_STATE: Todos = [];

export default function todos(
  state = INITIAL_STATE,
  action: {
    type: string;
    payload: any;
  }
) {
  switch (action.type) {
    case Types.ADD:
      return [
        {
          id: new Date().getTime(),
          completed: false,
          text: action.payload.text,
        },
        ...state,
      ];
    case Types.EDIT:
      return state.map(todo =>
        todo.id === action.payload.id
          ? { ...todo, text: action.payload.text }
          : todo
      );
    case Types.REMOVE:
      return state.filter(todo => todo.id !== action.payload.id);
    default:
      return state;
  }
}

export const Creators = {
  add: (text: string) => ({
    type: Types.ADD,
    payload: {
      text,
    },
  }),

  edit: (id: number, text: string) => ({
    type: Types.EDIT,
    payload: {
      id,
      text,
    },
  }),

  remove: (id: number) => ({
    type: Types.REMOVE,
    payload: {
      id,
    },
  }),
};
