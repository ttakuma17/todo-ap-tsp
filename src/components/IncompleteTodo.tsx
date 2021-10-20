import React, { memo, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { incompleteTodoState } from './store/incompleteTodoState';

import { useGetTodo } from '../hooks/useGetTodo';
import { useMoveItemFunc } from '../hooks/useMoveItemFunc';

import { PushButton } from './PushButton';

export const IncompleteTodo = memo(() => {
  const { getTodos, todos } = useGetTodo();
  const [incompleteTodo, setIncompleteTodo] =
    useRecoilState(incompleteTodoState);
  const { incompleteToWorking, incompleteToPending, incomleteItemDelete } =
    useMoveItemFunc();

  useEffect(() => {
    getTodos();
    const initIncompleteTodo: Array<string> = [
      ...incompleteTodo,
      todos[0].title,
      todos[1].title,
    ];
    setIncompleteTodo(initIncompleteTodo);
  }, []);

  // 以下は完成後に削除すること
  // console.log(todos); // オブジェクトの格納された配列
  // // 配列の0番目と1番目のtitleプロパティのみ取り出してincompleteTodoへ定義を行いたい
  // // set関数に値としてtitleプロパティを渡したときにnullエラーがが発生した
  // console.log(todos[0]); // {userId: 1, id: 1, title: 'delectus aut autem', completed: false} が表示される
  // console.log(todos[0].completed); // false
  // console.log(todos[0].title); // delectus aut autem
  // console.log(todos[1]); //{userId: 1, id: 2, title: 'quis ut nam facilis et officia qui', completed: false}
  // console.log(todos[1].title); // quis ut nam facilis et officia qui
  // // set関数を使用せずにconsole.logで検証すると適切な値が取得できることを確認
  // // 何故かエラーが発生していたが原因はわからず。かつコード上も差異は見られずだったので、一旦保留とする
  // 再読み込みをしたところ TypeError: Cannnot read properties of undefined (reading 'title') のエラーが出た
  // 値自体は上記で確認したとおり、取得できている
  // 型定義のエラーも出ていない状況 , 試しにanyに変更して読み込みをするも、TypeErrorが発生
  // setするのはAPIを取得できたときだけなので、非同期処理で失敗している感じかな
  // getTodoが成功したらinitCompleteTodoを定義してsetするみたいな処理が必要？
  // 非同期チェーンの理解のところなので試してみる

  return (
    <div className="bg-gray-50 rounded-md p-1 m-2">
      <p className="text-white text-lg text-center bg-blue-400 border-solid border4 border-blue-400 rounded-md w-1/4">
        Todo List
      </p>
      <ul>
        {incompleteTodo.map((todo: string, index: number) => {
          return (
            <li key={index}>
              <div className="flex">
                <p className="text-indigo-900 m-1.5">{todo}</p>
                <PushButton
                  onClickAction={() => {
                    incompleteToWorking(index);
                  }}>
                  Working
                </PushButton>
                <PushButton
                  onClickAction={() => {
                    incompleteToPending(index);
                  }}>
                  Pending
                </PushButton>
                <PushButton
                  onClickAction={() => {
                    incomleteItemDelete(index);
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

IncompleteTodo.displayName = 'IncompleteTodo';
