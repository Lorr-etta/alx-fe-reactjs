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
    error,
    refetch,
    isFetching,
  } = useQuery(
    ["posts"],
    fetchPosts,
    {
      cacheTime: 1000 * 60 * 5, // cache for 5 minutes
      staleTime: 1000 * 30,     // data is "fresh" for 30 seconds
      refetchOnWindowFocus: false, // don’t refetch when switching tabs
      keepPreviousData: true,      // keep old data while fetching new
    }
  );

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

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