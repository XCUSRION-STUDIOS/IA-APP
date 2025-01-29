// import backgroundImage from './assets/darkimg2.png';
// import Logo from './assets/xcursionlogo.png';

// export default function HomePage() {
//   return (
//     <div
//       className="h-screen w-screen bg-cover bg-center flex flex-col justify-center items-center relative"
//       style={{
//         backgroundImage: `url(${backgroundImage})`,
//       }}
//     >
//       {/* Logo Section */}
//       <div className="absolute top-10">
//         <img src={Logo} alt="XCURSION STUDIOS" className="h-10" />
//       </div>

//       {/* Title Section */}
//       <div
//         className="absolute flex flex-col items-center text-center text-white"
//         style={{ top: '35%' }} // Adjust this value to move the title closer or farther from the centre
//       >
//         <div className="border-t border-white w-64 opacity-50"></div>
//         <h1 className="mt-3 text-6xl font-thin tracking-widest">INCOMPLETE ASCENSION</h1>
//         <div className="mt-3 border-t border-white w-64 opacity-50"></div>
//       </div>

//       {/* Buttons Section */}
//       <div className="mt-[45vh] flex flex-col items-center gap-3 text-white">
//         <button className="w-60 bg-white/2 backdrop-blur-[2px] font-bold px-4 py-2 rounded-full transition duration-300 shadow-md hover:scale-105 active:scale-98">
//           NEW CHARACTER
//         </button>
//         <button className="w-60 bg-white/2 backdrop-blur-[2px] font-bold px-4 py-2 rounded-full transition duration-300 shadow-md hover:scale-105 active:scale-98">
//           LOAD CHARACTER
//         </button>
//         <button className="w-60 bg-white/2 backdrop-blur-[2px] font-bold px-4 py-2 rounded-full transition duration-300 shadow-md hover:scale-105 active:scale-98">
//           SETTINGS
//         </button>
//         <button className="w-60 bg-white/5 backdrop-blur-[2px] font-bold px-4 py-2 rounded-full transition duration-300 shadow-md hover:scale-105 active:scale-98">
//           EXIT
//         </button>
//       </div>

//       {/* Footer Section */}
//       <div className="absolute bottom-4 text-white opacity-70 text-sm">
//         <p className="font-[Metropolis]">www.url.com</p>
//       </div>
//     </div>
//   );
// }

// npm run dev

import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import backgroundImage from '../assets/darkimg2.png';
import Logo from '../assets/xcursionlogo.png';

export default function HomePage() {
  return (
    <div
      className="h-screen w-screen bg-cover bg-center flex flex-col justify-center items-center relative"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {/* Logo Section */}
      <div className="absolute top-10">
        <img src={Logo} alt="XCURSION STUDIOS" className="h-10" />
      </div>

      {/* Title Section */}
      <div
        className="absolute flex flex-col items-center text-center text-white"
        style={{ top: '35%' }} // Adjust this value to move the title closer or farther from the centre
      >
        <div className="border-t border-white w-64 opacity-50"></div>
        <h1 className="mt-3 text-6xl font-thin tracking-widest">INCOMPLETE ASCENSION</h1>
        <div className="mt-3 border-t border-white w-64 opacity-50"></div>
      </div>

      {/* Buttons Section */}
      <div className="mt-[45vh] flex flex-col items-center gap-3 text-white text-[1.15em]">
        <Link to="/new-character">
          <button className=" text-white w-60 bg-white/2 backdrop-blur-[2px] font-bold px-4 py-2 rounded-full transition duration-300 shadow-md hover:scale-105 active:scale-98">
            NEW CHARACTER
          </button>
        </Link>
        <Link to="/load-character">
          <button className=" text-white w-60 bg-white/2 backdrop-blur-[2px] font-bold px-4 py-2 rounded-full transition duration-300 shadow-md hover:scale-105 active:scale-98">
            LOAD CHARACTER
          </button>
        </Link>
        <Link to="/settings">
          <button className=" text-white w-60 bg-white/2 backdrop-blur-[2px] font-bold px-4 py-2 rounded-full transition duration-300 shadow-md hover:scale-105 active:scale-98">
            SETTINGS
          </button>
        </Link>
      </div>

      {/* Footer Section */}
      <div className="absolute bottom-4 text-white opacity-70 text-sm">
        <p className="font-[Metropolis]">www.url.com</p>
      </div>
    </div>
  );
}
