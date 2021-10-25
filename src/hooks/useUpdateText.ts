/* eslint-disable react-hooks/exhaustive-deps */
import { ChangeEventHandler, useCallback } from 'react';
import { useSetRecoilState } from 'recoil';
import { inputTodoState } from '../components/store/inputTodoState';

export const useUpdateText = () => {
  // useSetRecoilStateを利用する場合は変数を囲う配列は不要
  const setTodoText = useSetRecoilState(inputTodoState);
  // イベントハンドラーの型定義を追加
  const onChangeTodoText: ChangeEventHandler<HTMLInputElement> = useCallback(
    (event) => {
      setTodoText(event.target.value);
    },
    []
  );
  return { onChangeTodoText };
};
