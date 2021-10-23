import React, { memo, useEffect } from 'react';
import { useRecoilState } from 'recoil';

import { pendingTodoState } from './store/pendingTodoState';
import { useGetTodo } from '../hooks/useGetTodo';
import { useMoveItemFunc } from '../hooks/useMoveItemFunc';
import { PushButton } from './PushButton';

export const PendingTodo = memo(() => {
  const { todos, getTodos } = useGetTodo();
  const [pendingTodo, setPendingTodo] = useRecoilState(pendingTodoState);
  const { pendingToIncomplete, pendingToWorking } = useMoveItemFunc();
  useEffect(() => getTodos(), []);
  useEffect(() => {
    if (todos[5]?.title === undefined || todos[6]?.title === undefined) {
      console.log(todos[5]?.title);
      console.log(todos[6]?.title);
      return;
    } else {
      const initPendingTodo: Array<string> = [todos[5]?.title, todos[6]?.title];
      setPendingTodo(initPendingTodo);
    }
  }, [todos]);

  return (
    <div className="bg-gray-50 rounded-md p-1 m-2">
      <p className="text-white text-lg text-center bg-blue-400 border-solid border4 border-blue-400 rounded-md w-1/4">
        Pending Todo List
      </p>
      <ul>
        {pendingTodo.map((todo, index) => {
          return (
            <li key={todo}>
              <div className="flex">
                <p className="text-indigo-900 m-1.5">{todo}</p>
                <PushButton
                  onClick={() => {
                    pendingToIncomplete(index);
                  }}>
                  Back Todo
                </PushButton>
                <PushButton
                  onClick={() => {
                    pendingToWorking(index);
                  }}>
                  Working
                </PushButton>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
});

PendingTodo.displayName = 'PendingTodo';
