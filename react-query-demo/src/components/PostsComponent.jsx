// src/components/PostsComponent.jsx
import React from "react";
import { useQuery } from "react-query";

const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  return res.json();
};

export default function PostsComponent() {
  const {
    data,
    isLoading,
    isError,
    error,
    refetch,
    isFetching,
  } = useQuery(
    ["posts"],
    fetchPosts,
    {
      cacheTime: 1000 * 60 * 5,
      staleTime: 1000 * 30,
      refetchOnWindowFocus: false,
      keepPreviousData: true,
    }
  );

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>; // 

  return (
    <div>
      <h2>Posts</h2>
      {isFetching && <p>Refreshing data...</p>}
      <button onClick={() => refetch()}>Refetch Posts</button>
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}