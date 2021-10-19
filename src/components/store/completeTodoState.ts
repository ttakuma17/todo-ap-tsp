import { atom } from 'recoil';

import { Todo } from '../../types/todo';

export const completeTodoState = atom<Array<Todo>>({
  key: 'completeTodoState',
  default: [],
});
