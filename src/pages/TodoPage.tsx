import React, { memo, VFC } from 'react';
import { Toaster } from 'react-hot-toast';

import { CompleteTodo } from '../components/CompleteTodo';
import { IncompleteTodo } from '../components/IncompleteTodo';
import { InputTodo } from '../components/InputTodo';
import { PendingTodo } from '../components/PendingTodo';
import { WorkingTodo } from '../components/WorkingTodo';

export const TodoPage: VFC = memo(() => {
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
