import React, { useContext, useEffect, useState } from "react";
import "./feed.css";
import Share from "./../share/share";
import Post from "./../post/Post";
import axios from "axios";
import {AuthContext} from "../../context/AuthContext"

export default function Feed({ username }) {
  const [posts, setPosts] = useState([]);
  const {user} = useContext(AuthContext);
  useEffect(() => {
    const fetchPosts = async () => {
      const res = username
        ? await axios.get("posts/profile/" + username)
        : await axios.get("posts/timeline/" + user._id);
      setPosts(res.data.sort((p1,p2) =>{
        return new Date(p2.createdAt) - new Date(p1.createdAt);
      }));
    };
    fetchPosts();
  }, [username,user._id]);
  console.log(posts)

  return (
    <div className="feed">
      <div className="feedWrapper">
        {(!username || username === user.username) && <Share />}
        {posts.map((p) => (Array.isArray(p) === false ? 
          <Post key={p._id} post={p} /> :
          p.map((p1) => 
            <Post key={p1._id} post={p1} />
          )
        ))}
      </div>
    </div>
  );
}
