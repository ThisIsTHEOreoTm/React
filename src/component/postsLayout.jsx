import { Outlet } from "react-router-dom";

export default function PostsLayout() {
  return (
    <div>
      <h1>Posts</h1>
      <Outlet />
    </div>
  );
}
