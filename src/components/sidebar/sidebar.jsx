import React from "react";

import "./sidebar.css";

import Logo from "../../assets/logo/twitter-logo.svg";

import homeOutline from "../../assets/twit-icons/home-outline.svg";
import homeFill from "../../assets/twit-icons/home-fill.svg";

import exploreOutline from "../../assets/twit-icons/explore.svg";
import exploreFill from "../../assets/twit-icons/explore-fill.svg";

import notificationsOutline from "../../assets/twit-icons/notification.svg";
// import notificationsFill from "../../assets/twit-icons/export-fill.svg";

import messagesOutline from "../../assets/twit-icons/messages.svg";
// import messagesFill from "../../assets/twit-icons/export-fill.svg";

import bookmarksOutline from "../../assets/twit-icons/bookmarks.svg";
// import bookmarksFill from "../../assets/twit-icons/export-fill.svg";

import listsOutline from "../../assets/twit-icons/lists.svg";
// import listsFill from "../../assets/twit-icons/export-fill.svg";

import profileOutline from "../../assets/twit-icons/profile-outline.svg";
// import profileFill from "../../assets/twit-icons/export-fill.svg";

import moreOutline from "../../assets/twit-icons/more.svg";
// import moreFill from "../../assets/twit-icons/export-fill.svg";

import boburImg from "../../assets/profile-images/bobur.png";

import Button from "../button/button.jsx";
import Profile from "../profile/profile.jsx";

function Sidebar() {
  return (
    <div className="sidebar">
      <div>
        <div>
          <img src={Logo} alt="" />
        </div>
        <div className="sidebar-button-div">
          <Button type="hasIcon">
            <img src={homeOutline} alt="" width={24} height={24} />
            Home
          </Button>
          <Button type="hasIcon">
            <img src={exploreOutline} alt="" width={17} height={17} />
            Explore
          </Button>
          <Button type="hasIcon">
            <img src={notificationsOutline} alt="" width={24} height={24} />
            Notifications
          </Button>
          <Button type="hasIcon">
            <img src={messagesOutline} alt="" width={24} height={24} />
            Messages
          </Button>
          <Button type="hasIcon">
            <img src={bookmarksOutline} alt="" width={24} height={24} />
            Bookmarks
          </Button>
          <Button type="hasIcon">
            <img src={listsOutline} alt="" width={24} height={24} />
            Lists
          </Button>
          <Button type="hasIcon">
            <img src={profileOutline} alt="" width={24} height={24} />
            Profile
          </Button>
          <Button type="hasIcon">
            <img src={moreOutline} alt="" width={24} height={24} />
            More
          </Button>
          <Button type="primary">Tweet</Button>
        </div>

        <Profile name="Bobur" username="@bobur_mavlonov" profImg={boburImg} />
      </div>
    </div>
  );
}

export default Sidebar;
