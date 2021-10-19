import { atom } from 'recoil';

import { Todo } from '../../types/todo';

export const pendingTodoState = atom<Array<Todo>>({
  key: 'pendingTodoState',
  default: [],
});
