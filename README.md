# uhyo-ts

書籍「プロを目指す人のための TypeScript 入門」の勉強用リポジトリ

## コマンドメモ

### コンパイル（ts→js）

`npx tsc`

### js ファイルの実行

`node dist/xxx.js`

### ts ファイルの実行（コンパイル～実行）

_※--esm は、ts-node で ESModules のファイルを実行するためのオプション_
`ts-node --esm xxx.ts`
