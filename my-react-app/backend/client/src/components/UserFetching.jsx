import { useQuery } from "@tanstack/react-query";
import React from "react";

const fetchUser = () => {
  return fetch("https://jsonplaceholder.typicode.com/users").then((response) =>
    response.json()
  );
};

const UserFetching = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: fetchUser,
  });

  return (
    <div>
      <>
        <h1>사용자 정보</h1>
        {data?.map((data) => (
          <div>
            <div>Name : {data.name}</div>
            <div>Email : {data.email}</div>
            <div>Phone : {data.phone}</div>
            <hr />
          </div>
        ))}
      </>
    </div>
  );
};

export default UserFetching;
