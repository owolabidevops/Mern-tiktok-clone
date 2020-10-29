import { MusicNote } from "@material-ui/icons";
import React from "react";
import "./VideoFooter.css";
import Ticker from "react-ticker";

function VideoFooter({channel, description, song}) {
  return (
    <div className="video-footer">
      <div className="videofooter-text">
        <h3>@{channel}</h3>
        <p>{description}</p>
        <div className="videofooter-ticker">
          <MusicNote className="videofooter-icon" />

          <Ticker mode="smooth">
            {({ index }) => (
              <>
                <p>{song}</p>
              </>
            )}
          </Ticker>
        </div>
      </div>
      <img
        className="videofooter-record"
        src="https://static.thenounproject.com/png/934821-200.png"
        alt=""
      />
    </div>
  );
}

export default VideoFooter;
