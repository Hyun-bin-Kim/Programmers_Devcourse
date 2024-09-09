const express = require("express");

const app = express();

// body-parser
app.use(express.json()); //클라이언트 -> 서버로 데이터 요청 보냈을 때 json형식으로 변환

//cors 설정
const cors = require("cors");
app.use(cors());

//rotuer 설계
const index = require("./router/index");
app.use("/", index);
app.listen(5000, () => console.log("Server is running on 127.0.0.1:5000"));
