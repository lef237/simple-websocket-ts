const port = 8080; // サーバーのポート番号
console.log(`WebSocket Server is running on port ${port}`);

Bun.serve({
	fetch(req, server) {
		// upgrade the request to a WebSocket
		if (server.upgrade(req)) {
			return; // do not return a Response
		}
		return new Response("Upgrade failed :(", { status: 500 });
	},
	port,
	websocket: {
		message(ws, message) {
			console.log(`Received message => ${message}`);
			ws.send(`Hello, Client! Your message was: ${message}`); // クライアントに応答を送信
		},
		close() {
			console.log("Client has disconnected");
		},
	},
});
