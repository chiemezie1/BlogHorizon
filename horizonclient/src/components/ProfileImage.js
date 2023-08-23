import React from "react";

function ProfileImage({ svg }) {
  return (
    <div>
      <div>
        <img
          src={svg}
          alt="profile"
          className="w-16 h-auto border-2 rounded-full border-black shadow-lg"
        />
      </div>
    </div>
  );
}

export default ProfileImage;
