import React, { useEffect, useState } from "react";

import "./App.css";
import Video from "./Video";
import axios from "./axios"

function App() {
  const [videos, setVideos] = useState([]);
  
  useEffect(() => {
    async function fetchPosts(){
      const response = await axios.get("/v2/posts")
      setVideos(response.data);
   return response;
    }
    fetchPosts();

  }, [])
  console.log(videos)
  return (
    <div className="app">
      <div className="app-videos">

      {videos.map(({ url, channel, description, song, likes, messages, share }) => (
        <Video
          url={url}
          channel={channel}
         description={description}
         song={song}
          likes={likes}
         share={share}
        />
      ))}
     
      </div>
    </div>
  );
}

export default App;
