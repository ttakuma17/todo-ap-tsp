import { atom } from 'recoil';

import { Todo } from '../../types/todo';

export const incompleteTodoState = atom<Array<Todo>>({
  key: 'incompleteTodoState',
  default: [],
});
