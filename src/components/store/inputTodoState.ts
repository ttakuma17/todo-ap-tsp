import { atom } from 'recoil';

import { Todo } from '../../types/todo';

export const inputTodoState = atom<Array<Todo>>({
  key: 'inputTodoState',
  default: [],
});

// defaultの初期値を空文字列に設定
// 元々は空配列を指定していた
