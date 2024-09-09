import React from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const addItem = async (newItem) => {
  const response = await axios.post("http://localhost:5000/api/add", newItem);
  return response.data;
};

const UseMutaionEx = () => {
  const queryClient = useQueryClient();

  const addItemMutation = useMutation({
    mutationFn: addItem,
    onSuccess: (result) => {
      console.log("Todo created successfully:", result);
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
    onError: (error) => {
      console.error("Error creating todo:", error);
    },
  });

  const sendData = () => {
    const itemName = prompt("📝새로운 할 일을 입력하세요📝");

    if (itemName) {
      addItemMutation.mutate({ text: itemName });
    }
  };
  return (
    <div>
      <h1>할 일 추가</h1>
      <button onClick={sendData}>Add Todo</button>
    </div>
  );
};

export default UseMutaionEx;
