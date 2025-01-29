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
import Logo from '../assets/xcursionlogo.png';

export default function NewCharacter() {
  return (
    <div
      className="h-screen w-screen bg-cover bg-center flex flex-col items-center justify-center text-white"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
       {/* Logo Section */}
       <div className="absolute top-10">
        <img src={Logo} alt="XCURSION STUDIOS" className="h-10" />
      </div>

      {/* Character Info Section */}
      <div className=" mt-5 text-center">
        <h1 className="text-xl font-light tracking-wide">CHARACTER INFO:</h1>
      </div>

      {/* Input Fields */}
      <div className="mt-6 space-y-2 w-96 flex flex-col items-center text-white">
        {["Username", "Age", "Height", "Ethnicity", "Occupation", "Relationship"].map((label) => (
          <input
            key={label}
            type="text"
            placeholder={label}
          
            className = "w-90 bg-white/2 backdrop-blur-[2px] px-4 py-1 rounded-full transition duration-300 shadow-md hover:scale-105 active:scale-98 text-sm"
          />
        ))}
      </div>
      
      {/* Skill Levels Section */}
      <div className=" mt-10 text-center">
        <h1 className="text-xl font-light tracking-wide">SKILL STARTING LEVEL:</h1>
      </div>

      {/* Skill Level Inputs */}
      <div className="mt-4 space-y-2 w-96 flex flex-col items-center text-white">
        {["Set Physical Level", " Set Spiritual", "Set Mental Level", " Set Social Level", "Set Emotional Level"].map((label) => (
          <input
            key={label}
            type="text"
            placeholder={label}
            className = "text-center w-45 bg-white/2 backdrop-blur-[2px] px-4 py-1 rounded-full transition duration-300 shadow-md hover:scale-105 active:scale-98 text-sm"
          />
        ))}
      </div>


      {/* NEXT Button */}
      <Link to="/">
          <button className="w-30 mt-10 px-6 py-2 text-base  text-black bg-white rounded-full hover:bg-gray-300 transition">
            CREATE 
          </button>
      </Link>

      {/* Exit Button */}
      <Link to="/">
          <button className="w-30 mt-3 px-6 py-2 text-base  text-black bg-white rounded-full hover:bg-gray-300 transition">
            BACK
          </button>
      </Link>

      {/* Footer Section */}
      <div className="absolute bottom-4 text-white opacity-70 text-sm">
        <p className="font-[Metropolis]">www.url.com</p>
      </div>
    </div>
  );
}
