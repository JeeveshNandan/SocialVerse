import React, { useContext } from "react";
import "./topbar.css"
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import MessageRoundedIcon from '@mui/icons-material/MessageRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import {Link} from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";


export default function Topbar() {
  
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
      <Link to="/" style={{textDecoration:"none"}}>
        <span className="logo">Social</span>
      </Link>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
            <SearchIcon className="searchIcon"/>
            <input placeholder="Serach for Friends, Posts or Videos" className="searchInput" />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
            <span className="topbarLink">Homepage</span>
            <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
            <div className="topbarIconItem">
                <PersonIcon />
                <span className="topbarIconBadge">1</span>
            </div>
            <div className="topbarIconItem">
                <MessageRoundedIcon />
                <span className="topbarIconBadge">1</span>
            </div>
            <div className="topbarIconItem">
                <NotificationsRoundedIcon />
                <span className="topbarIconBadge">1</span>
            </div>
        </div>
        <Link to={`${user.username}`}>  
        <img alt="" src={user.profilePicture ? PF+user.profilePicture : PF+"person/noAvatar.png"} className="topbarImg"/>
        </Link>
      </div>
    </div>
  );
}
