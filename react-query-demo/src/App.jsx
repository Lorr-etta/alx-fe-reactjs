// src/App.jsx
import React, { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import PostsComponent from "./components/PostsComponent";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,     // cache considered fresh for 60s
      cacheTime: 5 * 60 * 1000, // cache kept for 5 mins after unmount
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  // Simple toggle to demonstrate caching when unmounting/remounting the component
  const [showPosts, setShowPosts] = useState(true);

  return (
    <QueryClientProvider client={queryClient}>
      <div style={{ padding: 20 }}>
        <h1>React Query Demo: Posts</h1>

        <button onClick={() => setShowPosts((s) => !s)}>
          {showPosts ? "Hide Posts" : "Show Posts"}
        </button>

        <p style={{ opacity: 0.7, marginTop: 8 }}>
          Toggle the component to see cached data restore instantly when showing again.
        </p>

        {showPosts && <PostsComponent />}
      </div>
    </QueryClientProvider>
  );
}

export default App;