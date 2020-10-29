import { Favorite, FavoriteBorder, Message, Share } from "@material-ui/icons";
import React, { useState } from "react";
import "./VideoSidebar.css";

function VideoSidebar({likes, share, messages}) {
  const [liked, setLiked] = useState(false);
  return (
    <div className="videosidebar">
      <div className="videosidebar-button">
        {liked ? (
          <Favorite
            className="fav"
            fontSize="large"
            onClick={(e) => setLiked(false)}
          />
        ) : (
          <FavoriteBorder fontSize="large" onClick={(e) => setLiked(true)} />
        )}
        <p>{liked ? likes + 1 : likes}</p>
      </div>
      <div className="videosidebar-button">
        <Message fontSize="large" />
        <p>{messages}</p>
      </div>
      <div className="videosidebar-button">
        <Share fontSize="large" />
        <p>{share}</p>
      </div>
    </div>
  );
}

export default VideoSidebar;
