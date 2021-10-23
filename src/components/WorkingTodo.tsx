import React, { memo, useEffect } from 'react';
import { useRecoilState } from 'recoil';

import { workingTodoState } from './store/workingTodoState';
import { useMoveItemFunc } from '../hooks/useMoveItemFunc';
import { PushButton } from './PushButton';
import { useGetTodo } from '../hooks/useGetTodo';

export const WorkingTodo = memo(() => {
  const { todos, getTodos } = useGetTodo();
  const [workingTodo, setWorkingTodo] = useRecoilState(workingTodoState);
  const { workingToPending, workingToComplete } = useMoveItemFunc();
  useEffect(() => getTodos(), []);
  useEffect(() => {
    if (todos[3]?.title === undefined || todos[4]?.title === undefined) {
      console.log(todos[3]?.title);
      console.log(todos[4]?.title);
      return;
    } else {
      const initWorkingTodo: Array<string> = [todos[3]?.title, todos[4]?.title];
      setWorkingTodo(initWorkingTodo);
    }
  }, [todos]);

  return (
    <div className="bg-gray-50 rounded-md p-1 m-2">
      <p className="text-white text-lg text-center bg-blue-400 border-solid border4 border-blue-400 rounded-md w-1/4">
        Working Todo List
      </p>
      <ul>
        {workingTodo.map((todo, index) => {
          return (
            <li key={todo}>
              <div className="flex">
                <p className="text-indigo-900 m-1.5">{todo}</p>
                <PushButton
                  onClick={() => {
                    workingToPending(index);
                  }}>
                  Pending
                </PushButton>
                <PushButton
                  onClick={() => {
                    workingToComplete(index);
                  }}>
                  Done
                </PushButton>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
});

WorkingTodo.displayName = 'WorkingTodo';
