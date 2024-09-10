const Book = require("./models/book");
const readBooks = async () => {
  try {
    // 전체 book 데이터 조회
    const books = await Book.find();
    return books;
  } catch (err) {
    console.error("책 조회 오류:", err);
    throw err;
  }
};

const updateBook = async (bookid, updateData) => {
  try {
    // 기존 책 데이터를 먼저 찾기
    // findById() : _id에 해당하는 값 찾기
    // const existingBook = await Book.findById(bookid);

    console.log("updateBook ::::::");

    const existingBook = await Book.findOne({ bookid: bookid });

    if (!existingBook) {
      return null; // 책을 찾지 못한 경우 null 반환
    }

    // 기존 데이터와 새 데이터 병합
    const mergedData = { ...existingBook.toObject(), ...updateData };

    const updatedBook = await Book.findByIdAndUpdate(
      existingBook._id,
      mergedData,
      {
        new: true, // 업데이트 후의 새로운 문서 반환
        runValidators: true, // 스키마의 유효성 검사 실행
      }
    );
    return updatedBook;
  } catch (err) {
    console.error("책 업데이트 오류:", err);
    throw err;
  }
};

const createBook = async (bookData) => {
  try {
    const newBook = new Book(bookData);
    // 새로 생성된 book 문서를 데이터베이스에 저장
    const savedBook = await newBook.save();
    return savedBook;
  } catch (err) {
    console.error("책 생성 오류:", err);
    throw err;
  }
};

const deleteBook = async (bookid) => {
  try {
    const deletedBook = await Book.findOneAndDelete({ bookid: bookid });
    return deletedBook;
  } catch (err) {
    console.error("책 삭제 오류:", err);
    throw err;
  }
};
module.exports = { readBooks, updateBook, createBook, deleteBook };
