import React from "react";

const CustomButton = ({ svg, text }) => {
  return (
    <button className="px-4 py-2 flex gap-1 transition ease-in duration-200 rounded-3xl hover:bg-gray-200 border-2 border-gray-900 focus:outline-none shadow-lg">
      <img src={svg} alt="Logo" className="h-6 w-6 items-end" />
      <div>{text}</div>
    </button>
  );
};

export default CustomButton;


// import React from "react";
// import CustomButton from "./CustomButton"; // Adjust the path to your component
// import add from "../assets/add.svg"; // Adjust the path to your SVG

// function App() {
//   return (
//     <div>
//       <CustomButton svg={add} text="Create Blog" />
//     </div>
//   );
// }

// export default App;
