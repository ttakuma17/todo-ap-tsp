import { atom } from 'recoil';

export const workingTodoState = atom<Array<string>>({
  key: 'workingTodoState',
  default: [],
});
