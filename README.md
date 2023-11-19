# simple-websocket-typescript
シンプルなWebSocketのTypeScriptコード

## 使い方
### Nodeを使う場合
`node-websocket`のディレクトリで`npm install`を実行してください。

### Bunを使う場合

[Installation | Bun Docs](https://bun.sh/docs/installation) に従ってBunをインストールしてください。

`bun-websocket`のディレクトリで`bun install`を実行してください。

### サーバーを起動します。
Node.jsのサーバーを起動する場合
```
cd node-websocket
npx ts-node server.ts
```

Bunのサーバーを起動する場合
```
cd bun-websocket
bun run server.ts
```

### クライアントを起動します。
サーバーを起動した状態のまま、別のターミナルでクライアントを起動します。

Node.jsのクライアントを起動する場合
```
cd node-websocket
npx ts-node client.ts
```

Bunのクライアントを起動する場合
```
cd bun-websocket
bun run client.ts
```

### ターミナルに文字を打ち込みます。
クライアント側で入力した文字がサーバー側に送信されます。
サーバーは受信した文字をクライアントに送信します。

先にサーバーを起動してから、クライアントを起動してください。

サーバーとクライアント側の両方のターミナルを開いたまま、クライアント側で文字を入力してエンターキーを押してください。

```zsh
Connected to the server.
Enter message to send: ←ここで文字を入力してEnterをすると……！？
```

## FormatとLintをしたいとき
### Node.jsのディレクトリ
```
cd node-websocket
npx @biomejs/biome format --write .
npx @biomejs/biome lint .
```

### Bunのディレクトリ
```
cd bun-websocket
bunx @biomejs/biome format --write .
bunx @biomejs/biome lint .
```

### 終了します。
ターミナルに入力してエンターキーを押してください。
`exit`を入力するか、`Ctrl + C`で終了します。
