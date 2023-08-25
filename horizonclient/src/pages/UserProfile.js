import React from "react";
import ProfileImage from "../components/ProfileImage";
import { Link } from "react-router-dom";

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
    "@chiemezieagbo"
  ];

  return (
    <div>
      <div className="">
        <div className="p-8 text-right">
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
          <div className="font-semibold text-gray-700">
          Posts: <span className="font-bold">{Posts} </span>
          </div>
          <div className="font-semibold text-gray-700">
          Joined: <span className="font-bold">{Joined} </span>
          </div>
          <div className="font-semibold text-gray-700">
          Lives in: <span className="font-bold">{LivesIn} </span>
          </div>
          <div className="font-semibold text-gray-700">
          WhatsApp: <span className="font-bold">{Whatsapp} </span>
          </div>
          <div className="font-semibold text-gray-700">
         x: <span className="font-bold">{x} </span>
          </div>

        </div>
      </div>
    </div>
  );
}

export default UserProfile;
