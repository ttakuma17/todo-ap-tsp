import { atom } from 'recoil';

export const incompleteTodoState = atom<Array<string>>({
  key: 'incompleteTodoState',
  default: [],
});
