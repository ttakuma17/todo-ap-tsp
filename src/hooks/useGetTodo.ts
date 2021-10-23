import axios from 'axios';
import { useCallback, useState } from 'react';

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export const useGetTodo = () => {
  const [todos, setTodos] = useState<Array<Todo>>([]);

  const getTodos = useCallback(() => {
    axios
      .get<Array<Todo>>('https://jsonplaceholder.typicode.com/todos')
      .then((res) => {
        setTodos(res.data);
      })
      .catch(() => alert('データの取得に失敗しました'));
  }, []);
  return { getTodos, todos };
};
