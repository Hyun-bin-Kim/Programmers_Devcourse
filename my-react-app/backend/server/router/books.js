const express = require("express");
const { readBooks, updateBook, createBook, deleteBook } = require("../bookService");
const router = express.Router();

router.get("/", async (request, response) => {
  try {
    const books = await readBooks();
    console.log(books);

    response.json(books);
  } catch (err) {
    response.status(500).json({ error: err.message });
  }
});

router.put("/:id", async (request, response) => {
  const bookId = request.params.id; // URL 파라미터에서 book ID 가져오기

  console.log("bookId : ", bookId);

  const updateData = request.body;
  console.log("updateData : ", updateData);

  try {
    const updatedBook = await updateBook(bookId, updateData);

    if (updatedBook) {
      response.status(200).json(updatedBook); // 성공적으로 업데이트된 문서 반환
    } else {
      response.status(404).json({ message: "책을 찾을 수 없습니다." }); // 문서가 없는 경우
    }
  } catch (err) {
    response.status(500).json({ message: "서버 오류", error: err.message }); // 오류 발생 시 응답
  }
});

router.post("/", async (request, response) => {
  try {
    const book = await createBook(request.body);
    console.log(book);
    response.status(201).json(book);
  } catch (err) {
    response.status(500).json({ error: err.message });
  }
});

router.delete("/:id", async (request, response) => {
  try {
    const book = await deleteBook(request.params.id);
    if (book) {
      response.json(book);
    } else {
      response.status(404).json({ message: "책을 찾을 수 없습니다." });
    }
  } catch (err) {
    response.status(500).json({ error: err.message });
  }
});

module.exports = router;
