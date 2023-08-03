import React from "react";
import "./sidebar.css";
import RssFeedRoundedIcon from '@mui/icons-material/RssFeedRounded';
import ChatRoundedIcon from '@mui/icons-material/ChatRounded';
import PlayCircleRoundedIcon from '@mui/icons-material/PlayCircleRounded';
import GroupRoundedIcon from '@mui/icons-material/GroupRounded';
import BookmarkRoundedIcon from '@mui/icons-material/BookmarkRounded';
import HelpOutlineRoundedIcon from '@mui/icons-material/HelpOutlineRounded';
import WorkOutlineRoundedIcon from '@mui/icons-material/WorkOutlineRounded';
import EventRoundedIcon from '@mui/icons-material/EventRounded';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import {Users} from "../../data"
import CloseFriend from "./../closeFriend/closeFriend"

export default function sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeedRoundedIcon className="sidebarIcon"/>
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <ChatRoundedIcon className="sidebarIcon"/>
            <span className="sidebarListItemText">Chats</span>
          </li>
          <li className="sidebarListItem">
            <PlayCircleRoundedIcon className="sidebarIcon"/>
            <span className="sidebarListItemText">Videos</span>
          </li>
          <li className="sidebarListItem">
            <GroupRoundedIcon className="sidebarIcon"/>
            <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
            <BookmarkRoundedIcon className="sidebarIcon"/>
            <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            <HelpOutlineRoundedIcon className="sidebarIcon"/>
            <span className="sidebarListItemText">Questions</span>
          </li>
          <li className="sidebarListItem">
            <WorkOutlineRoundedIcon className="sidebarIcon"/>
            <span className="sidebarListItemText">Jobs</span>
          </li>
          <li className="sidebarListItem">
            <EventRoundedIcon className="sidebarIcon"/>
            <span className="sidebarListItemText">Events</span>
          </li>
          <li className="sidebarListItem">
            <SchoolRoundedIcon className="sidebarIcon"/>
            <span className="sidebarListItemText">Courses</span>
          </li>
        </ul>
        <button className="sidebarButton">
            Show More
        </button>
        <hr className="sidebarHr"/>
        <ul className="sidebarFriendList">
            {Users.map(u=>(
              <CloseFriend key={u.id} user={u}/>
            ))}
        </ul>
      </div>
    </div>
  );
}
