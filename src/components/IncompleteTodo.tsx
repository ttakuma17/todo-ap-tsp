import React, { memo, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { incompleteTodoState } from './store/incompleteTodoState';

import { useGetTodos } from '../hooks/useGetTodos';
import { useMoveItemFunc } from '../hooks/useMoveItemFunc';

import { PushButton } from './PushButton';

export const IncompleteTodo = memo(() => {
  const { getJsonData } = useGetTodos();
  const [incompleteTodo, setIncompleteTodo] =
    useRecoilState(incompleteTodoState);
  const { incompleteToWorking, incompleteToPending, incomleteItemDelete } =
    useMoveItemFunc();

  // // incompleteTodoの初期値を設定
  useEffect(() => {
    getJsonData(0).then((data: any) => {
      const initIncompleteTodo: Array<string> = [...incompleteTodo, data, data];
      setIncompleteTodo(initIncompleteTodo);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="bg-gray-50 rounded-md p-1 m-2">
      <p className="text-white text-lg text-center bg-blue-400 border-solid border4 border-blue-400 rounded-md w-1/4">
        Todo List
      </p>
      <ul>
        {incompleteTodo.map((todo: string, index: number) => {
          return (
            <li key={todo}>
              <div className="flex">
                <p className="text-indigo-900 m-1.5">{todo}</p>
                <PushButton
                  onClickAction={() => {
                    incompleteToWorking(index);
                  }}>
                  Working
                </PushButton>
                <PushButton
                  onClickAction={() => {
                    incompleteToPending(index);
                  }}>
                  Pending
                </PushButton>
                <PushButton
                  onClickAction={() => {
                    incomleteItemDelete(index);
                  }}>
                  Delete
                </PushButton>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
});

IncompleteTodo.displayName = 'IncompleteTodo';
