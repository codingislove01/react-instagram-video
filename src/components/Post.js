import React from "react";
import Video from "./Video";

const Post = () => {
  return (
    <div className="post">
      <Header />
      <div className="video-container">
        <Video src="/sample.mp4" />
      </div>
      <ActionBar />
    </div>
  );
};

const Header = () => {
  return (
    <div className="bar">
      <div className="bar-left">
        <img
          src="https://randomuser.me/api/portraits/men/1.jpg"
          alt="profile"
          className="profile-image clickable"
        />
        <div className="profile-name clickable">codingislove</div>
      </div>
      <div className="bar-right">
        <img
          src={require("../images/menu.png")}
          alt="menu"
          className="menu-icon clickable"
        />
      </div>
    </div>
  );
};

const ActionBar = () => {
  return (
    <div className="bar">
      <div className="bar-left">
        <img
          src={require("../images/like.png")}
          alt="like"
          className="action-icon"
        />
        <img
          src={require("../images/comment.png")}
          alt="comment"
          className="action-icon"
        />
        <img
          src={require("../images/send.png")}
          alt="send"
          className="action-icon"
        />
      </div>
      <div className="bar-right">
        <img
          src={require("../images/bookmark.png")}
          alt="bookmark"
          className="action-icon-right"
        />
      </div>
    </div>
  );
};

export default Post;
