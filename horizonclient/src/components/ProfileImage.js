import React from "react";

function ProfileImage({ svg, size_w, size_h}) {
  return (
    <div>
      <div>
        <img
          src={svg}
          alt="profile"
          className={`w-${size_w} h-${size_h} border-4 rounded-full border-gray-300 shadow-lg`}
        />
      </div>
    </div>
  );
}

export default ProfileImage;
