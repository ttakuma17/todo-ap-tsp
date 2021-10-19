import { atom } from 'recoil';

export const completeTodoState = atom<Array<string>>({
  key: 'completeTodoState',
  default: [],
});
