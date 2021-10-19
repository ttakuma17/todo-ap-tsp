import axios from 'axios';
import { useCallback } from 'react';

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
  index: number; // indexの型定義用
};

export const useGetTodos = () => {
  const getJsonData = useCallback((index) => {
    const data = axios
      .get<Todo>('https://jsonplaceholder.typicode.com/todos')
      .then((res) => {
        const result = res.data[index].title;
        return result;
      })
      .catch((err) => console.log(err));
    return data;
  }, []);
  return { getJsonData };
};
