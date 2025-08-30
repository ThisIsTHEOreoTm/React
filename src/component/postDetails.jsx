import { useParams } from "react-router-dom";
import { useContext } from "react";
import MyContext from './Context';

export default function PostDetails() {
  const { id } = useParams();
  const posts = useContext(MyContext);
  const post = posts.find((p) => p.id === parseInt(id));

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="PostDetails">
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
}