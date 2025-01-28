// import { Link } from "react-router-dom";

// export default function NewCharacter() {
//   return (
//     <div className="h-screen flex justify-center items-center">
//       <h1 className="text-3xl font-bold text-white">New Character Page</h1>

//       {/* Button to go back to Home Page */}
//       <div className="mt-5">
//         <Link to="/">
//           <button className="w-60 bg-white/5 backdrop-blur-[2px] font-bold px-4 py-2 rounded-full transition duration-300 shadow-md hover:scale-105 active:scale-98">
//             BACK TO HOME
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// }

import { Link } from "react-router-dom";
import backgroundImage from '../assets/darkimg2.png';

export default function NewCharacter() {
  return (
    <div
      className="h-screen w-screen bg-cover bg-center flex flex-col items-center justify-center text-white"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Logo Section */}
      <div className="absolute top-4 left-4">
        <p className="text-xl font-light tracking-wide border px-3 py-1 rounded-md bg-white bg-opacity-20">
          XCURSION STUDIOS
        </p>
      </div>

      {/* Character Info Section */}
      <div className="text-center">
        <h1 className="text-3xl font-light tracking-wide">CHARACTER INFO:</h1>
      </div>

      {/* Input Fields */}
      <div className="mt-6 space-y-4 w-96">
        {["USERNAME", "AGE", "HEIGHT", "ETHNICITY", "OCCUPATION", "RELATIONSHIP"].map((label) => (
          <input
            key={label}
            type="text"
            placeholder={label}
            className="w-full py-2 px-4 text-center text-white bg-black bg-opacity-30 backdrop-blur-md rounded-md focus:outline-none focus:ring-2 focus:ring-white placeholder-white placeholder-opacity-70"
          />
        ))}
      </div>

      {/* Skill Levels Section */}
      <div className="text-center mt-10">
        <h2 className="text-2xl font-light tracking-wide">SKILL STARTING LEVEL:</h2>
      </div>

      {/* Skill Level Inputs */}
      <div className="mt-4 space-y-4 w-96">
        {["PHYSICAL LEVEL", "SPIRITUAL LEVEL", "MENTAL LEVEL", "SOCIAL LEVEL", "EMOTIONAL LEVEL"].map((label) => (
          <input
            key={label}
            type="text"
            placeholder={label}
            className="w-full py-2 px-4 text-center text-white bg-black bg-opacity-30 backdrop-blur-md rounded-md focus:outline-none focus:ring-2 focus:ring-white placeholder-white placeholder-opacity-70"
          />
        ))}
      </div>

      {/* Exit Button */}
      <Link to="/">
          <button className="mt-8 px-6 py-2 text-lg font-medium text-black bg-white rounded-full hover:bg-gray-300 transition">
            EXIT
          </button>
      </Link>

      {/* Footer Section */}
      <div className="absolute bottom-4 text-sm opacity-70">
        <p>www.url.com</p>
      </div>
    </div>
  );
}
