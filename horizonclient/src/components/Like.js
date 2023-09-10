import React from "react";
import { thumb_up } from "../svg/index";

function Like({ onLike }) {
  const likes = ["chiemezie", "sunday", "love", "kindness", "lanyda"];
  const numLikes = likes.length;

  return (
    <div className="flex justify-center items-center gap-1" onClick={onLike}>
      <img src={thumb_up} alt="thumb_up" className="h-4 w-4" />
      <div>{numLikes}</div>
    </div>
  );
}

export default Like;
