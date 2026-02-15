/* src/index.js */
import { createServer } from "node:http";
import { join } from "node:path";
import { uvPath } from "@titaniumnetwork-dev/ultraviolet";
import express from "express";

const app = express();
const server = createServer(app);

// ポート番号の設定（Renderなどのホスティングサービスに対応）
const port = process.env.PORT || 8080;

// 1. Ultravioletのシステムファイルを読み込む設定
// これにより、ブラウザから /uv/uv.bundle.js などにアクセスできるようになります
app.use("/uv/", express.static(uvPath));

// 2. 公開フォルダ（HTMLや設定ファイルがある場所）の設定
app.use(express.static("public"));

// 3. どのURLに来ても index.html を返す（エラー防止・SPA対応）
app.use((req, res) => {
  res.status(200).sendFile(join(process.cwd(), "public", "index.html"));
});

// サーバーの起動
server.on("listening", () => {
  console.log(`Server listening on: http://localhost:${port}`);
});

server.listen({
  port: port,
});
