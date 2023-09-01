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
