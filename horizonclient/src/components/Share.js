import React from "react";
import { share } from "../svg/index";

function Share({ onShare }) {
  const shares = ["chiemezie", "sunday", "love", "kindness", "Goodness"];
  const numShare = shares.length;

  return (
    <div className="flex justify-center items-center gap-1" onClick={onShare}>
      <img src={share} alt="share" className="h-4 w-4" />
      <div>{numShare}</div>
    </div>
  );
}

export default Share;
