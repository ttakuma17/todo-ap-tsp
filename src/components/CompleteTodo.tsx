import React, { memo } from 'react';

import { PushButton } from './PushButton';

import { useGetTodo } from '../hooks/useGetTodo';
import { useMoveItemFunc } from '../hooks/useMoveItemFunc';

export const CompleteTodo = memo(() => {
  const { completeTodo } = useGetTodo();
  const { completeToIncomplete, completeItemDelete } = useMoveItemFunc();

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
