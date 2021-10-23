import React, { memo, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { incompleteTodoState } from './store/incompleteTodoState';

import { useGetTodo } from '../hooks/useGetTodo';
import { useMoveItemFunc } from '../hooks/useMoveItemFunc';

import { PushButton } from './PushButton';

export const IncompleteTodo = memo(() => {
  const { todos, getTodos } = useGetTodo();
  const [incompleteTodo, setIncompleteTodo] =
    useRecoilState(incompleteTodoState);
  const { incompleteToWorking, incompleteToPending, incomleteItemDelete } =
    useMoveItemFunc();

  // レンダリング時に1度だけ実行されるよう処理
  useEffect(() => getTodos(), []);
  // 検証ツールでネットワークの速度を制限して実行したところ
  // 初期はUndefinedでボタンのみが表示されて、その後APIの値を取得したデータが格納された
  useEffect(() => {
    if (todos[0]?.title === undefined || todos[1]?.title === undefined) {
      console.log(todos[0]?.title);
      console.log(todos[1]?.title);
      return;
    } else {
      const initIncompleteTodo: Array<string> = [
        todos[0]?.title,
        todos[1]?.title,
      ];
      setIncompleteTodo(initIncompleteTodo);
    }
  }, [todos]);

  // クライアントサイドレンダリングなので
  // データを取得できていない状態で処理をしないといけないことはある

  // 実行前のtodos(undifined)から、値を取得したtodosへの変更が検知されて実行される
  // 1週目はundifinedだが、?でエラーは回避、2週目はgetTodos()を実行したからAPIのデータを取得して反映がされた
  // undefinedの配列が生成されていたことが原因だった

  // todosがなければLoading中にする
  // 早期リターンをして処理をさせない
  // 非同期処理でチェーンさせる
  // カスタムフック側でデータを設定して、コンポーネント側は呼び出しだけする

  // getTodosを非同期の関数として定義してあげて待つ
  // 早期リターンtodoがなければ動かさない→undefined2つが生まれることがなくなる

  // useEffectが2つなのが気持ち悪い

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
