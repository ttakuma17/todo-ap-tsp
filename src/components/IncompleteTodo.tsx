import React, { memo, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { incompleteTodoState } from './store/incompleteTodoState';

import { useGetTodo } from '../hooks/useGetTodo';
import { useMoveItemFunc } from '../hooks/useMoveItemFunc';

import { PushButton } from './PushButton';

export const IncompleteTodo = memo(() => {
  const { todos, getTodos } = useGetTodo();
  const [incompleteTodo, setIncompleteTodo] =
    useRecoilState(incompleteTodoState);
  const { incompleteToWorking, incompleteToPending, incomleteItemDelete } =
    useMoveItemFunc();

  // console.log(getTodos instanceof Promise); // false

  useEffect(() => {
    getTodos();
    const initIncompleteTodo: Array<string> = [todos[0].title, todos[1].title]; // 必要な要素のみ取り出し
    console.log(initIncompleteTodo); // 取り出せたことを確認→ブラウザをリロードするとTypeエラーとなる
    setIncompleteTodo(initIncompleteTodo);
  }, []);

  // テスト用
  // useEffect(() => {
  //   async function fetchData() {
  //     await getTodos();
  //     const initialValue = () => {
  //       const initIncompleteTodo: Array<string> = [
  //         todos[0].title,
  //         todos[1].title,
  //       ];
  //       setIncompleteTodo(initIncompleteTodo);
  //     };
  //     await initialValue();
  //   }
  //   fetchData();
  // }, []);

  // console.log(incompleteTodo); // ブラウザに再読み込みをかけなければ、データの取得はできている

  return (
    <div className="bg-gray-50 rounded-md p-1 m-2">
      <p className="text-white text-lg text-center bg-blue-400 border-solid border4 border-blue-400 rounded-md w-1/4">
        Todo List
      </p>
      <ul>
        {incompleteTodo.map((todo: string, index: number) => {
          return (
            <li key={index}>
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
