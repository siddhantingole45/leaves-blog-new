import Post from "../post/Post";
import "./posts.css";

export default function Posts({ posts }) {
  return (
    <div className="posts">
      {posts.map((post) => (
        <Post key={post._id || post.id} post={post} /> 
      ))}
    </div>
  );
}

// // To show only 6 posts.
// import Post from "../post/Post";
// import "./posts.css";

// export default function Posts({ posts }) {
//   // Limit the posts to the first 6
//   const limitedPosts = posts.slice(0, 6);

//   return (
//     <div className="posts">
//       {limitedPosts.map((post) => (
//         <Post key={post._id || post.id} post={post} /> 
//       ))}
//     </div>
//   );
// }
