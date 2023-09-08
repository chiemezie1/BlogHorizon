import React from "react";
import { Link } from "react-router-dom";
import { bg } from "../svg/index";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { share, mode_comment, thumb_up } from "../svg/index";

function Home() {
  const hasImage = bg && bg.length > 0;

  const likes = ["chiemezie", "sunday", "love", "kindness, lanyda"];
  const shares = ["chiemezie", "sunday", "love", "kindness", "Goodness"];
  const comment = ["wow", "goood", "love", "wonderful", "cool"];

  const numLikes = likes.length;
  const numComment = comment.length;
  const numShare = shares.length;

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar />

      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <section className="bg-white rounded-lg shadow-lg p-6 lg:p-8 mb-6">
          <div className="flex items-center gap-4 mb-6">
            <img
              src={bg}
              alt="Profile"
              className="h-12 w-12 rounded-full border-2 border-gray-300"
            />
            <p className="text-gray-900 font-semibold">Chiemezie Agbo</p>
          </div>

          <div
            className={`grid grid-cols-1 ${
              hasImage ? "md:grid-cols-2" : "md:grid-cols-1"
            } gap-6`}
          >
            {/* Conditionally render the image container */}
            {hasImage && (
              <div className="relative h-56 md:h-auto md:flex-shrink-0">
                <img
                  src={bg}
                  alt="News"
                  className="w-full h-full object-cover absolute inset-0 rounded-lg"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-end justify-start p-4">
                  <span className="text-white text-xs md:text-sm bg-red-500 px-2 py-1 rounded">
                    Category
                  </span>
                </div>
              </div>
            )}
            {!hasImage && (
              <div className=" flex items-end justify-start">
                <span className="text-white text-xs md:text-sm bg-gray-500 px-2 py-1 rounded">
                  Category
                </span>
              </div>
            )}
            <div className="space-y-4">
              <Link
                to={`/post`}
                className="block hover:bg-gray-100 p-2 rounded transition"
              >
                {/* <Link to={`/post/${postId}`} className="block hover:bg-gray-100 p-2 rounded transition"> */}
                <div>
                  <h2 className="text-xl font-bold mb-2 truncate">
                    Article Title
                  </h2>
                  <p className="text-gray-700 line-clamp-3 mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                  </p>
                </div>
                <div className="text-gray-600 text-sm md:text-base">
                  A healthy weight is more than just a number on the scale; it's
                  a reflection of our overall well-being. Our weight can be an
                  indicator of our inner health, acting as a gauge of how our
                  body responds to our lifestyle choices. Maintaining a healthy
                  weight is not merely about conforming to societal beauty
                  standards; it is a vital component of overall well-being.
                  Maintaining an optimal weight means we are in tune with our
                  body's needs, from the foods we consume to the amount of
                  physical activity we engage in.
                </div>
              </Link>
            </div>
            <div className="flex gap-3 p-3">
              <div className="flex justify-center items-center gap-1">
                <img src={thumb_up} alt="thumb_up" className="h-4 w-4" />
                <div>{numLikes}</div>
              </div>

              <div className="flex justify-center items-center gap-1">
                <img
                  src={mode_comment}
                  alt="mode_comment"
                  className="h-4 w-4 mt-1"
                />
                <div>{numComment}</div>
              </div>

              <div className="flex justify-center items-center gap-1">
                <img src={share} alt="share" className="h-4 w-4" />
                <div>{numShare}</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Home;
