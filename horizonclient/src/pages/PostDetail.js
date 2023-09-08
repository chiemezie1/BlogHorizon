import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { bg } from "../svg/index";

function PostDetail() {

  const hasImage = bg && bg.length > 0;
  
  // const { id } = useParams();
  // const [post, setPost] = useState(null);

  // // Mock data (replace this with your API call)
  // const fetchData = async () => {
  //   // In a real-world scenario, replace the mock data below with an API call to fetch the post by its ID
  //   const mockData = {
  //     postId: "123",
  //     title: "Sample Post",
  //     content: "This is a detailed content of the sample post. Lorem ipsum...",
  //     author: "Chiemezie Agbo",
  //     imageUrl: "path_to_image.jpg", // you can replace this with the bg from '../svg/index' if needed
  //   };

  //   if (id === mockData.postId) {
  //     setPost(mockData);
  //   }
  // };

  // useEffect(() => {
  //   fetchData();
  // }, [id]);

  // if (post) {
  //   return <p>Loading...</p>;
  // }

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
              <div>
                <h2 className="text-xl font-bold mb-2 truncate">
                  Article Title
                </h2>
                <p className="text-gray-700 line-clamp-3 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                </p>
              </div>
              <div className="text-gray-600 text-sm md:text-base">
                A healthy weight is more than just a number on the scale; it's a
                reflection of our overall well-being. Our weight can be an
                indicator of our inner health, acting as a gauge of how our body
                responds to our lifestyle choices. Maintaining a healthy weight
                is not merely about conforming to societal beauty standards; it
                is a vital component of overall well-being. Maintaining an
                optimal weight means we are in tune with our body's needs, from
                the foods we consume to the amount of physical activity we
                engage in.
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default PostDetail;

// import React from "react";
// import Post from "../components/Post";

// function PostDetail() {
//   const svg = "svg/path";
//   const name = "chiemezie Agbo";
//   const content =
//     "Blockchain is a  decentralized ,  tamper - resistant ledger  that records transactions across   multiple  nodes.  It    eliminates  intermediaries,     enhances security, and   enables   transparent  and  efficient  processes.  With  smart   contracts,   it   automates agreements , revolutionizing industries like finance,  supply chain,  and  healthcare.  Ongoing   research  drives  its  evolution    and  wide   spread  adoption, transforming the digital landscape.";
//   const likes = ["chiemezie", "sunday", "love", "kindness, lanyda"];
//   const shares = ["chiemezie", "sunday", "love", "kindness", "Goodness"];
//   const comment = ["wow", "goood", "love", "wonderful", "cool"];

//   return (
//     <div>
//       <Post
//         svg={svg}
//         size_h={6}
//         size_w={6}
//         name={name}
//         likes={likes}
//         content={content}
//         comment={comment}
//         shares ={shares}
//       />
//     </div>
//   );
// }

// export default PostDetail;

// import React from 'react';

// const EditPost = () => {

// const [post, setPost] = useState(null);
// const [loading, setLoading] = useState(true);
// const [error, setError] = useState(null);
// const response = "";

// useEffect(() => {
//     const fetchPost = async () => {
//         try {
//             // Assuming your API endpoint structure is something like /api/posts/:postId
//             //const response = await axios.get(`/api/posts/${match.params.postId}`);
//             setPost(response.data);
//             setLoading(false);
//         } catch (err) {
//             setError(err.message);
//             setLoading(false);
//         }
//     };

//     fetchPost();
// }, [match.params.postId]);

// if (loading) return <div>Loading...</div>;
// if (error) return <div>Error: {error}</div>;

//     const post = {
//         title: "Exploring the Mysteries of the Universe",
//         image: "path_to_image.jpg", // Replace with your hardcoded image path
//         author: "Jane Doe",
//         date: "2023-09-06",
//         content: `
//             <p>Our universe is a vast and mysterious place. For centuries, humans have looked up to the skies, trying to understand our place in the vast cosmos.</p>
//             <p>With every new discovery, we find more questions than answers. The more we learn, the more we realize how much we don't know.</p>
//             <p>From black holes to dark matter, from quasars to quantum mechanics, the universe is full of enigmas waiting to be unraveled.</p>
//         `
//     };

//     return (
//         <div className="container mx-auto mt-10 p-4 md:p-8 bg-white shadow-lg rounded-lg">
//             <h2 className="text-3xl font-bold mb-4">{post.title}</h2>
//             {post.image && <img src={post.image} alt={post.title} className="w-full h-64 object-cover mb-6 rounded" />}
//             <p className="text-gray-600 mb-2">Written by {post.author} on {new Date(post.date).toLocaleDateString()}</p>
//             <div className="prose prose-sm sm:prose lg:prose-lg" dangerouslySetInnerHTML={{ __html: post.content }}></div>
//         </div>
//     );
// }

// export default EditPost;
