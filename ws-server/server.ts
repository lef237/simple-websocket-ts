import { Server } from "ws";

const port = 8080; // サーバーのポート番号
const server = new Server({ port });

console.log(`WebSocket Server is running on port ${port}`);

server.on("connection", (ws) => {
	ws.on("message", (message) => {
		console.log(`Received message => ${message}`);
		ws.send(`Hello, Client! Your message was: ${message}`); // クライアントに応答を送信
	});

	ws.on("close", () => {
		console.log("Client has disconnected");
	});
});
