const express = require("express");
const connectDB = require("./mongoConn");
const app = express();
const cors = require("cors");
const books = require("./router/books");

const PORT = 5000;

connectDB()
  .then(() => {
    console.log("MongoDB 연결 성공");
    app.use(express.json());
    app.use(cors());
    app.use("/books", books);
    app.listen(PORT, () => {
      console.log("Server Running at http://127.0.0.1:5000");
    });
  })
  .catch((err) => {
    // 연결 실패 시 프로세스 종료
    console.error("MongoDB 연결 오류:", err);
    process.exit(1);
  });
