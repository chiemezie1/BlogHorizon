import React, { useState } from "react";
import { mode_comment } from "../svg/index";

function Comment({ onCommentClick }) {
  const comment = ["wow", "goood", "love", "wonderful", "cool"];
  const numComment = comment.length;

  return (
    <div className="flex justify-center items-center gap-1" onClick={onCommentClick}>
      <img src={mode_comment} alt="mode_comment" className="h-4 w-4 mt-1" />
      <div>{numComment}</div>
    </div>
  );
}

export default Comment;
