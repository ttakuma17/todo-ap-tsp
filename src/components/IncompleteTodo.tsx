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
  useEffect(() => getTodos(), []);
  useEffect(() => {
    if (todos[0]?.title === undefined || todos[1]?.title === undefined) {
      console.log(todos[0]?.title);
      console.log(todos[1]?.title);
      return;
    } else {
      const initIncompleteTodo: Array<string> = [
        todos[0]?.title,
        todos[1]?.title,
      ];
      setIncompleteTodo(initIncompleteTodo);
    }
  }, [todos]);

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
                  onClick={() => {
                    incompleteToWorking(index);
                  }}>
                  Working
                </PushButton>
                <PushButton
                  onClick={() => {
                    incompleteToPending(index);
                  }}>
                  Pending
                </PushButton>
                <PushButton
                  onClick={() => {
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
