import { atom } from 'recoil';

export const inputTodoState = atom<string>({
  key: 'inputTodoState',
  default: '',
});

// defaultの初期値を空文字列に設定
// 元々は空配列を指定していた
