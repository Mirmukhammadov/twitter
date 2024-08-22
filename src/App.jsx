import React from "react";

import Button from "./components/button/button.jsx";
import icon from "./assets/twit-icons/comment.svg";
import threeDot from "./assets/twit-icons/three-dot.svg";

import Sidebar from "./components/sidebar/sidebar.jsx";
import Post from "./components/post/post.jsx";

import NewPost from "./components/newPost/newPost.jsx";

import { PostInfo } from "./Context/postContext.jsx";

function App() {
  const postInfo = React.useContext(PostInfo);
  return (
    <div>
      {/* <Sidebar /> */}

      {/* <ul>
        {postInfo.map((post) => {
          return (
            <li key={post.id}>
              <Post post={post} />
            </li>
          );
        })}
      </ul> */}
      <NewPost />
    </div>
  );
}

export default App;
