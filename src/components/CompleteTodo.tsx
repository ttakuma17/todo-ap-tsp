import React, { memo, useEffect } from 'react';
import { useRecoilState } from 'recoil';

import { completeTodoState } from './store/completeTodoState';
import { useGetTodo } from '../hooks/useGetTodo';
import { useMoveItemFunc } from '../hooks/useMoveItemFunc';
import { PushButton } from './PushButton';

export const CompleteTodo = memo(() => {
  const { todos, getTodos } = useGetTodo();
  const [completeTodo, setCompleteTodo] = useRecoilState(completeTodoState);
  const { completeToIncomplete, completeItemDelete } = useMoveItemFunc();
  useEffect(() => getTodos(), []);
  useEffect(() => {
    if (todos[7]?.title === undefined || todos[8]?.title === undefined) {
      console.log(todos[7]?.title);
      console.log(todos[8]?.title);
      return;
    } else {
      const initPendingTodo: Array<string> = [todos[7]?.title, todos[8]?.title];
      setCompleteTodo(initPendingTodo);
    }
  }, [todos]);

  return (
    <div className="bg-gray-50 rounded-md p-1 m-2">
      <p className="text-white text-lg text-center bg-blue-400 border-solid border4 border-blue-400 rounded-md w-1/4">
        Complete Todo List
      </p>
      <ul>
        {completeTodo.map((todo, index) => {
          return (
            <li key={todo}>
              <div className="flex">
                <p className="text-indigo-900 m-1.5">{todo}</p>
                <PushButton
                  onClick={() => {
                    completeToIncomplete(index);
                  }}>
                  Back Todo
                </PushButton>
                <PushButton
                  onClick={() => {
                    completeItemDelete(index);
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

CompleteTodo.displayName = 'CompleteTodo';
