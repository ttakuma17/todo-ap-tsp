import React, { memo, useEffect, VFC } from 'react';
import { Toaster } from 'react-hot-toast';

import { CompleteTodo } from '../components/CompleteTodo';
import { IncompleteTodo } from '../components/IncompleteTodo';
import { InputTodo } from '../components/InputTodo';
import { PendingTodo } from '../components/PendingTodo';
import { WorkingTodo } from '../components/WorkingTodo';

import { useGetTodo } from '../hooks/useGetTodo';

export const TodoPage: VFC = memo(() => {
  // TODOを取得するカスタムフック呼び出し
  const { getTodos } = useGetTodo();
  // TODOの初期値を設定する関数を実行
  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div className="font-body">
      <Toaster />
      <InputTodo />
      <IncompleteTodo />
      <WorkingTodo />
      <PendingTodo />
      <CompleteTodo />
    </div>
  );
});

TodoPage.displayName = 'TodoPage';
