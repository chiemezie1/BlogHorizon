import React from "react";
import ProfileImage from "../components/ProfileImage";
import { share, mode_comment, thumb_up } from "../svg/index";

function Post({ svg, size_h, size_w, name, content, likes, comment, shares }) {

  const numLikes = likes.length;
  const numComment = comment.length;
  const numShare = shares.length;

  return (
    <div className="p-8">
      <div className="border-2 border-gray-100 shadow-md">
        <div className="p-2 flex gap-1 justify-start ">
          <ProfileImage svg={svg} size_w={size_w} size_h={size_h} />
          <div className="font-semibold">{name}</div>
        </div>
        <div className="px-4 py-2">{content}</div>


        <div className="flex gap-3 p-3">
          <div className="flex justify-center items-center gap-1">
            <img src={thumb_up} alt="thumb_up" className="h-4 w-4" />
            <div>{numLikes}</div>
          </div>

          <div className="flex justify-center items-center gap-1">
            <img src={mode_comment} alt="mode_comment" className="h-4 w-4 mt-1" />
            <div>{numComment}</div>
          </div>

          <div className="flex justify-center items-center gap-1">
            <img src={share} alt="share" className="h-4 w-4" />
            <div>{numShare}</div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Post;
