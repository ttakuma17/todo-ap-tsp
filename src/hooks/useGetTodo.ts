import axios from 'axios';
import { useCallback, useState } from 'react';
import { useRecoilState } from 'recoil';

import { incompleteTodoState } from '../components//store/incompleteTodoState';
import { workingTodoState } from '../components//store/workingTodoState';
import { pendingTodoState } from '../components//store/pendingTodoState';
import { completeTodoState } from '../components//store/completeTodoState';

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export const useGetTodo = () => {
  const [todos, setTodos] = useState<Array<Todo>>([]);
  const [incompleteTodo, setIncompleteTodo] =
    useRecoilState(incompleteTodoState);
  const [workingTodo, setWorkingTodo] = useRecoilState(workingTodoState);
  const [pendingTodo, setPendingTodo] = useRecoilState(pendingTodoState);
  const [completeTodo, setCompleteTodo] = useRecoilState(completeTodoState);
  const getTodos = useCallback(() => {
    axios
      .get<Array<Todo>>('https://jsonplaceholder.typicode.com/todos')
      .then((res) => {
        const initIncompleteTodo: Array<string> = [
          res.data[0].title,
          res.data[1].title,
        ];
        const initWorkingTodo: Array<string> = [
          res.data[2].title,
          res.data[3].title,
        ];
        const initPendingTodo: Array<string> = [
          res.data[4].title,
          res.data[5].title,
        ];
        const initCompleteTodo: Array<string> = [
          res.data[6].title,
          res.data[7].title,
        ];
        setTodos(res.data);
        setIncompleteTodo(initIncompleteTodo);
        setWorkingTodo(initWorkingTodo);
        setPendingTodo(initPendingTodo);
        setCompleteTodo(initCompleteTodo);
      })
      .catch(() => alert('データの取得に失敗しました'));
  }, []);
  return {
    getTodos,
    todos,
    incompleteTodo,
    pendingTodo,
    completeTodo,
    workingTodo,
  };
};
