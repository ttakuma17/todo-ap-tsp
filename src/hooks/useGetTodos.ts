import axios from 'axios';
import { useCallback } from 'react';

import { Todo } from '../types/todo';

export const useGetTodos = () => {
  const getJsonData = useCallback((index) => {
    const data = axios
      .get<Array<Todo>>('https://jsonplaceholder.typicode.com/todos')
      .then((res) => {
        const result = res.data[index].title;
        return result;
      })
      .catch((err) => console.log(err));
    return data;
  }, []);
  return { getJsonData };
};
