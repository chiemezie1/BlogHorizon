import React from "react";
import ProfileImage from "../components/ProfileImage";
import { Link } from "react-router-dom";
import { post, schedule, x_png, settings, edit, phone_msg } from "../svg/index";

function UserProfile() {
  const svg = "path/to/your/svg";
  const name = "Chiemezie Agbo";
  const [LivesIn, Joined, Posts, Following, Followers, Whatsapp, x] = [
    "Enugu",
    "June 2023",
    "9",
    "335",
    "366",
    "+2340816545430",
    "@chiemezieagbo",
  ];

  return (
    <div>
      <div className="">
        <div className=" flex p-8 gap-1 justify-end items-center">
          <img src={settings} alt="-" className="h-4 w-4" />
          <Link className="no-underline text-opacity-50 text-md font-semibold leading-relaxed">
            Edit
          </Link>
        </div>
        <div className="flex flex-col md:flex-row items-center pt-12">
          <ProfileImage svg={svg} size_w={64} size_h={64} />
          <div className="md:pl-4">
            <div className="text-black text-2xl font-bold text-center md:text-start leading-8">
              {name}
            </div>
            <div className="max-w-sm text-center md:text-start pt-2 leading-5">
              Hyy i'm a blockchain developer, currently working with BlogHorizon
            </div>
            <div className="flex flex-row justify-evenly md:flex-col pt-4 ">
              <div className="font-semibold text-gray-700">
                Following: <span className="font-bold">{Following} </span>
              </div>
              <div className="font-semibold text-gray-700">
                Followers: <span className="font-bold">{Followers} </span>
              </div>
            </div>
          </div>
        </div>
        <div className="pl-20 md:pl-8 pt-8 font-bold">

          <div className=" flex p-2 gap-1 items-center">
            <img src={post} alt="-" className="h-4 w-4" />
            <div className="font-semibold text-gray-700">
              Posts: <span className="font-bold">{Posts} </span>
            </div>
          </div>
          <div className=" flex p-2 gap-1 items-center">
            <img src={schedule} alt="-" className="h-4 w-4" />
            <div className="font-semibold text-gray-700">
              Joined: <span className="font-bold">{Joined} </span>
            </div>
          </div>
          <div className=" flex p-2 gap-1 items-center">
            <img src={settings} alt="-" className="h-4 w-4" />
            <div className="font-semibold text-gray-700">
              Lives in: <span className="font-bold">{LivesIn} </span>
            </div>
          </div>
          <div className=" flex p-2 gap-1 items-center">
            <img src={phone_msg} alt="-" className="h-4 w-4" />
            <div className="font-semibold text-gray-700">
              WhatsApp: <span className="font-bold">{Whatsapp} </span>
            </div>
          </div>
          <div className=" flex p-2 gap-1 items-center">
            <img src={x_png} alt="-" className="h-4 w-4" />
            <div className="font-semibold text-gray-700">
              : <span className="font-bold">{x} </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
