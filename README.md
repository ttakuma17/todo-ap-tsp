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

    // "eslint": "^8.0.1",

    There might be a problem with the project dependency tree.

It is likely not a bug in Create React App, but something you need to fix locally.

The react-scripts package provided by Create React App requires a dependency:

"eslint": "^7.11.0"

Don't try to install it manually: your package manager does it automatically.
However, a different version of eslint was detected higher up in the tree:

/Users/taniguutakuma/app-develop/todo-ap-tsp/node_modules/eslint (version: 8.0.1)

Manually installing incompatible versions is known to cause hard-to-debug issues.

If you would prefer to ignore this check, add SKIP_PREFLIGHT_CHECK=true to an .env file in your project.
That will permanently disable this message but you might encounter other issues.

To fix the dependency tree, try following the steps below in the exact order:

1. Delete package-lock.json (not package.json!) and/or yarn.lock in your project folder.
2. Delete node_modules in your project folder.
3. Remove "eslint" from dependencies and/or devDependencies in the package.json file in your project folder.
4. Run npm install or yarn, depending on the package manager you use.

In most cases, this should be enough to fix the problem.
If this has not helped, there are a few other things you can try:

5. If you used npm, install yarn (http://yarnpkg.com/) and repeat the above steps with it instead.
   This may help because npm has known issues with package hoisting which may get resolved in future versions.

6. Check if /Users/taniguutakuma/app-develop/todo-ap-tsp/node_modules/eslint is outside your project directory.
   For example, you might have accidentally installed something in your home folder.

7. Try running npm ls eslint in your project folder.
   This will tell you which other package (apart from the expected react-scripts) installed eslint.

If nothing else helps, add SKIP_PREFLIGHT_CHECK=true to an .env file in your project.
That would permanently disable this preflight check in case you want to proceed anyway.

P.S. We know this message is long but please read the steps above :-) We hope you find them helpful!

error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
