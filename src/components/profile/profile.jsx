import React from "react";

import Button from "../button/button.jsx";
import threeDots from "../../assets/twit-icons/three-dot.svg";

import "./profile.css";

function Profile({ profImg, name, username }) {
  return (
    <div className="profile">
      <div>
        <div className="profile-img">
          <img src={profImg} alt="" />
        </div>
        <div className="profile-info">
          <h2>{name}</h2>
          <p>{username}</p>
        </div>
      </div>
      <div>
        <Button type="hasIcon">
          <img src={threeDots} alt="" />
        </Button>
      </div>
    </div>
  );
}

export default Profile;
