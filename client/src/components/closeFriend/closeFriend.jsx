import React from "react";
import "./closeFriend.css";

export default function closeFriend({user}) {
  
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <li className="sidebarFriend">
      <img className="sidebarFriendImg" alt="" src={PF+user.profilePicture} />
      <span className="sidebarFriendName">{user.username}</span>
    </li>
  );
}
