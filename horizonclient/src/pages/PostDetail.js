import React from "react";
import Post from "../components/Post";

function PostDetail() {
  const svg = "svg/path";
  const name = "chiemezie Agbo";
  const likes = ["chiemezie", "sunday", "love", "kindness"];
  const comment = ["woow", "goood", "love"];

  return (
    <div>
      <Post svg={svg} size_h={6} size_w={6} name={name} likes={likes} comment={comment} />
    </div>
  );
}

export default PostDetail;
