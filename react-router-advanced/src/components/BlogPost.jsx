import { useParams } from "react-router-dom";

export default function BlogPost() {
  const { id } = useParams();

  if (!id) {
    return <h2>No blog post found</h2>;
  }

  return <h2>Blog Post #{id}</h2>;
}