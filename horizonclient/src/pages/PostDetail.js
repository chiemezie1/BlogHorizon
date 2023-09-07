import React from "react";
import Post from "../components/Post";

function PostDetail() {
  const svg = "svg/path";
  const name = "chiemezie Agbo";
  const content =
    "Blockchain is a  decentralized ,  tamper - resistant ledger  that records transactions across   multiple  nodes.  It    eliminates  intermediaries,     enhances security, and   enables   transparent  and  efficient  processes.  With  smart   contracts,   it   automates agreements , revolutionizing industries like finance,  supply chain,  and  healthcare.  Ongoing   research  drives  its  evolution    and  wide   spread  adoption, transforming the digital landscape.";
  const likes = ["chiemezie", "sunday", "love", "kindness, lanyda"];
  const shares = ["chiemezie", "sunday", "love", "kindness", "Goodness"];
  const comment = ["wow", "goood", "love", "wonderful", "cool"];

  return (
    <div>
      <Post
        svg={svg}
        size_h={6}
        size_w={6}
        name={name}
        likes={likes}
        content={content}
        comment={comment}
        shares ={shares}
      />
    </div>
  );
}

export default PostDetail;



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
