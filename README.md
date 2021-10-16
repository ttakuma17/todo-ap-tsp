## ライブラリのインストール

1. TailwindCSS のインストール
   基本的には以下手順に従い設定
   Install Tailwind CSS with Create React App
   https://tailwindcss.com/docs/guides/create-react-app

2. Include Tailwind in your CSS の手順にて
   Unknown at rule @tailwindcss(unknownAtRules) が表示されることを確認
   エラー回避のため以下記事を参照し、stylelint をインストール
   https://sunday-morning.app/posts/2020-10-25-next-js-tailwindcss
   "css.validate": false, のみ.vscode > settings.json へ記載

3. 正常な挙動をすることを確認
   TailwindCSS のセットアップは完了とし、マージする

4. WL.Header コンポーネントと Footer コンポーネントを作成する

memo 化していると displayname が出てくるが、後ほどコンポーネントの最適化が必要
react-router-dom が必要なのでライブラリインストール

`yarn add react-router-dom`のインストール後
`yarn add @types/react-router-dom --dev`で型定義ファイルをインストール

HerosIcon を利用しているので、インストールする
`npm install @heroicons/react`
https://github.com/tailwindlabs/heroicons

react-router-dom の型宣言エラーが出るな。。。。さっきインストールしたのに。。。
Package.json にも存在することを確認

→ react-router 自体がインストールされていなかったことでエラーが発生していた

Example.tsx で HeadlessUI が必要なのでインストール
https://github.com/tailwindlabs/headlessui/tree/main/packages/%40headlessui-react
