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
      .then((res) => setTodos(res.data))
      .catch(() => alert('データの取得に失敗しました'));
  }, []);
  return { getTodos, todos };
};
// 17 でsetIncompleteTodoをしてあげると呼び出し側が選べるようになる
// axios の処理は非同期
// 関数自体が非同期ではなかったからできなかった
// 今回の関数の場合は非同期処理にするべきでもないケース
// 関数内で値をかえして上げる場合に非同期の処理が必要になるが今回はそのケースではない
