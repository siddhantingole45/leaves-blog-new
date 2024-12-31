import Post from "../post/Post";
import "./posts.css";

export default function Posts({ posts }) {
  return (
    <div className="posts">
      {posts.map((post) => (
        <Post key={post._id || post.id} post={post} /> // Use unique identifier (like _id or id)
      ))}
    </div>
  );
}
