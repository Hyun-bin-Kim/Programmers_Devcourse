import { useQuery } from "@tanstack/react-query";
import React from "react";

const fetchTodo = () => {
  return fetch("https://jsonplaceholder.typicode.com/todos").then((response) =>
    response.json()
  );
};

const TodoFetching = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodo,
  });
  return (
    <>
      <h1>이번주 할 일 리스트</h1>
      {data?.map((data) => (
        <div>
          <input type="checkbox" />
          {data.title}
        </div>
      ))}
    </>
  );
};

export default TodoFetching;
