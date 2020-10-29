import mongoose from "mongoose";

const tiktokSchema = mongoose.Schema({
  url: String,
  channel: String,
  description: String,
  song: String,
  likes: String,
  messages: String,
  share: String,
});
// collection inside the database
export default mongoose.model("tiktokVideos", tiktokSchema);
