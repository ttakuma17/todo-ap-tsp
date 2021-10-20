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
  const getJsonData = useCallback((index: number) => {
    const data = axios
      .get<Array<Todo>>('https://jsonplaceholder.typicode.com/todos')
      .then((res) => {
        // console.log(res); // axiosで取得したレスポンス情報
        // console.log(res.data); // オブジェクトが格納された配列が帰ってきた
        const result = res.data[index].title;
        return result;
      })
      .catch((err) => console.log(err)); // void ここでは関数の返り値がないので 条件分岐とか
    return data;
  }, []);
  return { getJsonData };
};
