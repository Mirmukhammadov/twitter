import React from "react";

import "./post.css";

import comment from "../../assets/twit-icons/comment.svg";
import retweet from "../../assets/twit-icons/retweet.svg";
import like from "../../assets/twit-icons/like.svg";
import share from "../../assets/twit-icons/share.svg";
import statistics from "../../assets/twit-icons/statistics.svg";
import profileImg from "../../assets/profile-images/bobur.png";
import threeDot from "../../assets/twit-icons/three-dot.svg";

import Button from "../button/button.jsx";

function Post({ post }) {
  return (
    <div className="post">
      <div>
        <img src={profileImg} alt="" />
      </div>
      <div className="post-div">
        <div>
          <div className="post-user-info">
            <div>
              <h2 className="post-user-info-heading">{post.name}</h2>
              <p className="post-user-info-paragraph">{post.username}</p>
              <span className="post-user-info-span"></span>
              <span className="post-user-info-paragraph">{post.time}</span>
            </div>
            <Button type="hasIcon">
              <img src={threeDot} alt="" />
            </Button>
          </div>
          <div className="post-info">
            <p>{post.content}</p>
            <div>
              <img src={post.img} alt="" />
            </div>
          </div>
        </div>
        <div className="post-reactions">
          <a type="hasIcon">
            <img src={comment} alt="" />
            <span>{post.reactions.comments}</span>
          </a>
          <a type="hasIcon">
            <img src={retweet} alt="" />
            <span>{post.reactions.retweets}</span>
          </a>
          <a type="hasIcon">
            <img src={like} alt="" />
            <span>{post.reactions.likes}</span>
          </a>
          <a type="hasIcon">
            <img src={share} alt="" />
          </a>
          <a type="hasIcon">
            <img src={statistics} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Post;
