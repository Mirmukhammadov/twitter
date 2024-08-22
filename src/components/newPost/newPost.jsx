import React from "react";

import "./newPost.css";

import ProfImg from "../../assets/profile-images/bobur.png";

function newPost() {
  return (
    <div className="newPost">
      <div>
        <img src={ProfImg} alt="Profile" className="profile-pic" />
      </div>
      <div className="tweet-input-container">
        <textarea
          placeholder="What's happening?"
          className="tweet-textarea"
        ></textarea>
        <div className="tweet-actions">
          <button className="tweet-button">Tweet</button>
        </div>
      </div>
    </div>
  );
}

export default newPost;
