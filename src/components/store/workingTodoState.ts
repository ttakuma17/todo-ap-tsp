import { atom } from 'recoil';

import { Todo } from '../../types/todo';

export const workingTodoState = atom<Array<Todo>>({
  key: 'workingTodoState',
  default: [],
});
