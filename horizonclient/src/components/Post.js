import React from "react";
import ProfileImage from "../components/ProfileImage";
import { share, mode_comment } from "../svg/index";

function Post({ svg, size_h, size_w, name, content, likes, comment }) {
  return (
    <div className="p-8">
      <div className="border-2 border-gray-100 shadow-md">
        <div className="p-2 flex gap-1 justify-start ">
          <ProfileImage svg={svg} size_w={size_w} size_h={size_h} />
          <div className="font-semibold">{name}</div>
        </div>
        <div>
          {content}
        </div>
      </div>
    </div>
  );
}

export default Post;
