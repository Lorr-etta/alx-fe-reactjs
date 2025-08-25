// src/components/PostsComponent.jsx
import React from "react";
import { useQuery } from "react-query";

const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";

async function fetchPosts() {
  const res = await fetch(POSTS_URL);
  if (!res.ok) {
    throw new Error(`Failed to fetch posts: ${res.status}`);
  }
  return res.json();
}

export default function PostsComponent() {
  const {
    data,
    error,
    isLoading,
    isFetching,
    refetch,
    isError,
  } = useQuery(["posts"], fetchPosts);

  return (
    <div style={{ marginTop: 16 }}>
      <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
        <h2 style={{ margin: 0 }}>Posts</h2>
        {isFetching && <small>(refreshing…)</small>}
        <button onClick={() => refetch()} style={{ marginLeft: "auto" }}>
          Refetch Posts
        </button>
      </div>

      {isLoading && <p>Loading posts…</p>}

      {isError && (
        <p style={{ color: "red" }}>
          {(error && error.message) || "Something went wrong."}
        </p>
      )}

      {data && (
        <ul style={{ marginTop: 12 }}>
          {data.slice(0, 10).map((post) => (
            <li key={post.id} style={{ marginBottom: 8 }}>
              <strong>{post.title}</strong>
              <div style={{ opacity: 0.8 }}>{post.body}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}