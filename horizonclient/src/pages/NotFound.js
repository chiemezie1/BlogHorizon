import React from 'react';
import { bg } from '../svg';

const NotFound = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gray-200">
            <div className="w-64 h-64 bg-center bg-no-repeat bg-cover" style={{ backgroundImage: "url('path_to_funny_image.png')" }}></div>
            <h1 className="text-6xl font-bold text-gray-700 mt-6 mb-4">Oops!</h1>
            <h2 className="text-2xl text-gray-600 mb-8">Looks like our cat pushed this page off the edge!</h2>
            <p className="text-gray-500 mb-4">Maybe try searching for it, or just enjoy the void it left behind.</p>
            <a href="/" className="text-blue-500 hover:underline">Back to sanity (Home Page)</a>
        </div>
    );
}

export default NotFound;



// import React from 'react';
// import { bg } from '../svg';

// const NotFound = () => {
//     return (
//         <div className="min-h-screen flex flex-col justify-center items-center bg-gray-200">
//             <div className="w-64 h-64">
//                 {/* Directly use the imported SVG */}
//                 <img src={bg} alt="Funny graphic for 404 page" className="mx-auto"/>
//             </div>
//             <h1 className="text-6xl font-bold text-gray-700 mt-6 mb-4">Uh-oh!</h1>
//             <h2 className="text-2xl text-gray-600 mb-8">Seems our space alien abducted this page!</h2>
//             <p className="text-gray-500 mb-4">But don't worry, you can always beam back to our home planet below.</p>
//             <a href="/" className="text-blue-500 hover:underline">Teleport Home</a>
//         </div>
//     );
// }

// export default NotFound;
