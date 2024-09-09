import React from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import UseMutationEx from "./UseMutaionEx";
import axios from "axios";

// GET 요청
const fetchTodo = () => {
  return fetch("http://localhost:5000/api/todo").then(
    (response) => response.json() // 응답 데이터를 JSON 형식으로 변환
  );
};

// 새로운 할일을 추가 요청
const addItem = async (newItem) => {
  const response = await axios.post("http://localhost:5000/api/add", newItem);
  return response.data; //성공 -> 응답 데이터 반환
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

//TodoFetchingAddNode component
const TodoFetchingAddNode = () => {
  // QueryClient 인스턴스 - React Query 사용할려고,
  const queryClient = useQueryClient();

  const { data, error, isLoading } = useQuery({
    queryKey: ["todos"], // querykey : 'todos'로 캐시 관리
    queryFn: fetchTodo, // 데이터를 가져오는 함수
  });

  //할일 추가하는 useMutation 설정
  const addItemMutation = useMutation({
    mutationFn: addItem,
    onSuccess: (result) => {
      console.log("Todo created successfully:", result);
      // 아이템 추가 후 데이터를 다시 가져옴
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
    onError: (error) => {
      console.error("Error creating todo:", error);
    },
  });
  //할일 상태 수정 useMutation 설정
  const updateTodoMutation = useMutation({
    mutationFn: updateTodoStatus, //할 일 상태를 변경하는 함수
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

  //할일 check에 대한 이벤트 처리
  const changeHandler = (todo) => {
    updateTodoMutation.mutate(todo); //선택한 할일의 상태 업데이트
  };

  // 삭제 버튼 클릭 처리
  const deleteHandler = (itemId) => {
    deleteTodoMutation.mutate(itemId);
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error occurred: {error.message}</p>;

  //할일 입력
  const sendData = () => {
    const itemName = prompt("📝새로운 할 일을 입력하세요📝");

    if (itemName) {
      addItemMutation.mutate({ text: itemName });
    }
  };

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
      <button onClick={sendData}>Add Todo</button>
    </>
  );
};

export default TodoFetchingAddNode;
