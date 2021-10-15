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
