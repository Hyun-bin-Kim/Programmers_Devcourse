import React, { useState, useEffect } from 'react';
import './Book.css'; // 스타일

const Book = () => {
  const [books, setBooks] = useState([]); // 책 데이터를 저장하는 상태
  const [loading, setLoading] = useState(true); // 로딩 상태 관리

  // MongoDB에서 책 데이터를 가져오는 함수
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        // MongoDB에서 데이터를 가져오기 위한 API 호출
        const response = await fetch('http://127.0.0.1:5000/books'); // books API 호출
        const data = await response.json(); // JSON 형태로 변환
        setBooks(data); // 가져온 데이터를 상태에 저장
        setLoading(false); // 로딩 상태 해제
      } catch (error) {
        console.error('Error fetching books:', error);
        setLoading(false);
      }
    };

    fetchBooks();
  }, []); // 컴포넌트가 처음 렌더링될 때 한 번만 실행

  // 로딩 중일 때 보여줄 내용
  if (loading) {
    return <div>Loading...</div>;
  }

  // 책 데이터가 없는 경우
  if (books.length === 0) {
    return <div>No books found.</div>;
  }

  return (
    <div className="book-container">
      <h1>Book List</h1>
      <table className="book-table">
        <thead>
          <tr>
            <th>Book ID</th>
            <th>Book Name</th>
            <th>Publisher</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book._id}>
              <td>{book._id}</td> {/* MongoDB는 기본적으로 _id 필드를 사용 */}
              <td>{book.name}</td>
              <td>{book.publisher}</td>
              <td>{book.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Book;
