import React, { useState, useEffect } from "react";
import ProfileImage from "../components/ProfileImage";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { post, schedule, x_png, settings, home, phone_msg } from "../svg/index";

function UserProfile() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:4000/profile", {
      method: "GET",
      credentials: "include",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setProfile(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const svg = "path/to/your/svg";

  return (
    <>
      <Navbar />
      <div className="max-w-5xl flex justify-center mx-auto">
        <div className="">
          <div className=" flex p-2 gap-1 justify-end items-center">
            <img src={settings} alt="-" className="h-4 w-4" />
            <Link to='/edit-Profile' className="no-underline text-opacity-50 text-md font-semibold leading-relaxed">
              Edit
            </Link>
          </div>
          <div className="flex flex-col md:flex-row items-center pt-4">
            <ProfileImage svg={svg} size_w={64} size_h={64} />
            <div className="md:pl-4">
              <div className="text-black text-2xl font-bold text-center md:text-start leading-8">
                {profile.firstname + " " + profile.lastname}
              </div>
              <div className="max-w-sm text-center md:text-start pt-2 leading-5">
                {profile.introduction}
              </div>
              <div className="flex flex-row justify-evenly md:flex-col pt-4 ">
                <div className="font-semibold text-gray-700">
                  Following:{" "}
                  <span className="font-bold">{profile.following.length}</span>
                </div>
                <div className="font-semibold text-gray-700">
                  Followers:{" "}
                  <span className="font-bold">{profile.followers.length}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="pl-4 md:pl-8 pt-8 font-bold">
            <div className=" flex p-2 gap-1 items-center">
              <img src={post} alt="-" className="h-4 w-4" />
              <div className="font-semibold text-gray-700">
                Posts: <span className="font-bold">{profile.posts.length}</span>
              </div>
            </div>
            <div className=" flex p-2 gap-1 items-center">
              <img src={schedule} alt="-" className="h-4 w-4" />
              <div className="font-semibold text-gray-700">
                Joined:{" "}
                <span className="font-bold">
                  {new Date(profile.joined).toLocaleDateString()}
                </span>
              </div>
            </div>
            <div className=" flex p-2 gap-1 items-center">
              <img src={home} alt="-" className="h-4 w-4" />
              <div className="font-semibold text-gray-700">
                Lives in:{" "}
                <span className="font-bold">{profile.location || " "}</span>
              </div>
            </div>
            <div className=" flex p-2 gap-1 items-center">
              <img src={phone_msg} alt="-" className="h-4 w-4" />
              <div className="font-semibold text-gray-700">
                WhatsApp: <span className="font-bold">{profile.whatsapp}</span>
              </div>
            </div>
            <div className=" flex p-2 gap-1 items-center">
              <img src={x_png} alt="-" className="h-4 w-4" />
              <div className="font-semibold text-gray-700">
                : <span className="font-bold">{profile.twitterHandle}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default UserProfile;
