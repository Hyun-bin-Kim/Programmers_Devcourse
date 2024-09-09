import React from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import UseMutaionEx from "./UseMutaionEx";
import axios from "axios";

//데이터 조회
const fetchTodo = () => {
  return fetch("http://localhost:5000/api/todo").then((response) =>
    response.json()
  );
};

// 할일 상태 업데이트
const updateTodoStatus = async (todo) => {
  const response = await axios.put(
    `http://localhost:5000/api/todo/${todo.id}`, //해당 할일 id, put 요청
    { status: !todo.status } //체크 여부 변경
  );
  return response.data; //성공 -> 응답 데이터 반환
};

// 아이템 삭제 함수
const deleteTodoItem = async (itemId) => {
  console.log(itemId);
  const response = await axios.delete(
    `http://localhost:5000/api/todo/${itemId}`
  );

  return response.data;
};

const TodoFetchingNode = () => {
  const queryClient = useQueryClient();
  //데이터 조회
  const { data, error, isLoading } = useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodo,
  });

  //아이템 추가
  const updateTodoMutation = useMutation({
    mutationFn: updateTodoStatus,
    onSuccess: (result) => {
      console.log("Todo created successfully:", result);
      // 아이템 추가 후 데이터를 다시 가져옴
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
    // 네트워크 문제, 서버 에러, 유효성 검사 실패 등
    onError: (error) => {
      console.error("Error adding item:", error);
      alert("Failed to add item. Please try again.");
    },
  });

  // 아이템 삭제
  const deleteTodoMutation = useMutation({
    mutationFn: deleteTodoItem,

    onSuccess: (result) => {
      console.log("Todo deleted successfully:", result);

      // 아이템 추가 후 데이터를 다시 가져옴
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },

    onError: (error) => {
      // 네트워크 문제, 서버 에러, 유효성 검사 실패 등
      // 에러 처리 로직
      console.error("Error deleting item:", error);
      alert("Failed to delete item. Please try again.");
    },
  });

  // 체크 박스 클릭 처리
  function changeHandler(todo) {
    updateTodoMutation.mutate(todo);
  }
  // 삭제 버튼 클릭 처리
  const deleteHandler = (itemId) => {
    deleteTodoMutation.mutate(itemId);
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error occurred: {error.message}</p>;

  return (
    <>
      <h3>이번 주 할 일 리스트</h3>
      {data.map((todo) => (
        <p key={todo.id}>
          <input
            type="checkbox"
            checked={todo.status}
            onChange={() => changeHandler(todo)}
          />
          {todo.text}
          <button
            className="button delete-button"
            onClick={() => deleteHandler(todo.id)}
          >
            X
          </button>
        </p>
      ))}
      <UseMutaionEx />
    </>
  );
};

export default TodoFetchingNode;
