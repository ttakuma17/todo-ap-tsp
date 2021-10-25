# Typescript×React の Todo アプリ

## ライブラリのインストール

ライブラリの型定義については[Typescript 公式](https://www.typescriptlang.org/dt/search?search=)より検索

1. TailwindCSS のインストール
   [Install Tailwind CSS with Create React App](https://tailwindcss.com/docs/guides/create-react-app)
   　　- Include Tailwind in your CSS の手順でのエラー
   　　　 Unknown at rule @tailwindcss(unknownAtRules) が表示される(ESLint)
   　　- エラー回避のため以下記事を参照し、stylelint をインストールし、設定ファイルを定義
   　　　[参考記事](https://sunday-morning.app/posts/2020-10-25-next-js-tailwindcss)
   　　　 参考記事のうち対応した箇所は、"css.validate": false, のみ .vscode > settings.json へ記載

1. react-router のインストール
   [react-router](https://github.com/remix-run/react-router)
   `yarn add react-router`と`yarn add @types/react-router --dev`を実行

1. react-router-dom のインストール
   [react-router-dom](https://www.npmjs.com/package/react-router-dom)
   `yarn add react-router-dom`と`yarn add @types/react-router-dom --dev`を実行

1. HerosIcon のインストール
   [HerosIcon](https://github.com/tailwindlabs/heroicons)
   github の記載の通り、`npm install @heroicons/react`を実施

1. HeadlessUI のインストール
   [HeadlessUI](https://github.com/tailwindlabs/headlessui/tree/main/packages/%40headlessui-react)
   `yarn add @headlessui/react`のコマンドを実施
   Typescript で開発されているライブラリのため、追加の型定義ファイルは不要

1. recoil のインストール
   [recoil](https://github.com/facebookexperimental/Recoil)
   `yarn add recoil`のコマンドを実施
   ライブラリに型定義ファイルが含まれている

1. axios のインストール
   [axios](https://github.com/axios/axios)
   `yarn add axios`のコマンドを実施
   ライブラリに型定義が含まれている

## 今後修正したいところ

- input が空の場合のエンターキーによる読み込みの制御 / 記入している場合はエンターキーで Submit 可能に変更する
- グローバルステートとローカルステートの修正 → inputTodo をグローバルステートにしているがローカルステートとなっている
- ディレクトリ構造の見直し 型定義フォルダを src 直下に変更すること
- CSS を整える（レスポンシブ）

## 機能追加アイデア

- Todo の削除時には、確認のモーダルを表示させて、確認ボタンを押したら削除する
- 各 Todo に追加できる個数を制限する(PendingTodo は 5 個までしか追加できないようにするなど)
- API データを取得中はローディング画面を実装する
- Example コンポーネントに表示する文章を変更する
