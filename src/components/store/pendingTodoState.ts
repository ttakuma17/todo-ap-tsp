import { atom } from 'recoil';

export const pendingTodoState = atom<Array<string>>({
  key: 'pendingTodoState',
  default: [],
});
