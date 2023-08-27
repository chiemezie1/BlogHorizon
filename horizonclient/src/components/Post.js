import React from 'react';
import ProfileImage from "../components/ProfileImage";
import { share, mode_comment } from "../svg/index";

function Post({svg, size_h, size_w}) {
  return (
    <div>
      <div className='border-2 border-gray-100 shadow-md'>
        <dv className='p-2 justify-start '>
        <ProfileImage svg={svg} size_w={6} size_h={6} />
        </dv>

      </div>
      
    </div>
  )
}

export default Post
