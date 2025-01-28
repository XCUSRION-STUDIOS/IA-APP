// import { Link } from "react-router-dom";

// export default function LoadCharacter() {
//   return (
//     <div className="h-screen flex justify-center items-center">
//       <h1 className="text-3xl font-bold text-white">Load Character Page</h1>

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

interface Character {
  name: string;
  level: number;
  class: string;
  title: string;
  daysSinceAscension: number;
  hp: number;
  maxHp: number;
  eg: number;
  maxEg: number;
  md: number;
  maxMd: number;
}

const characters: Character[] = [
  { name: "CHARACTER ONE", level: 1, class: "None", title: "None", daysSinceAscension: 1, hp: 10, maxHp: 20, eg: 10, maxEg: 20, md: 10, maxMd: 20 },
  { name: "CHARACTER TWO", level: 1, class: "None", title: "None", daysSinceAscension: 1, hp: 10, maxHp: 20, eg: 10, maxEg: 20, md: 10, maxMd: 20 },
  { name: "CHARACTER THREE", level: 1, class: "None", title: "None", daysSinceAscension: 1, hp: 10, maxHp: 20, eg: 10, maxEg: 20, md: 10, maxMd: 20 },
  { name: "CHARACTER FOUR", level: 1, class: "None", title: "None", daysSinceAscension: 1, hp: 10, maxHp: 20, eg: 10, maxEg: 20, md: 10, maxMd: 20 },
];

export default function LoadCharacter() {
  return (
    <div
      className="h-screen w-screen bg-cover bg-center flex flex-col items-center justify-center text-white"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Logo Section */}
      <div className="absolute top-4">
        <p className="text-xl font-light tracking-wide border px-4 py-1 rounded-md bg-white bg-opacity-20">
          XCURSION STUDIOS
        </p>
      </div>

      {/* Character Cards */}
      <div className="space-y-6 w-full max-w-3xl">
        {characters.map((char, index) => (
          <div
            key={index}
            className="p-6 bg-black bg-opacity-40 backdrop-blur-md rounded-lg shadow-lg"
          >
            <h2 className="text-xl font-light tracking-wide">{char.name}</h2>
            <p className="text-lg font-bold">Level {char.level}</p>
            <p>Class: {char.class}</p>
            <p>Title: {char.title}</p>
            <p>Days Since Ascension: {char.daysSinceAscension}</p>

            {/* HP, EG, MD Bars */}
            <div className="mt-3">
              <p>HP: {char.hp}/{char.maxHp}</p>
              <div className="h-2 bg-gray-700 rounded-md overflow-hidden">
                <div
                  className="h-full bg-red-500"
                  style={{ width: `${(char.hp / char.maxHp) * 100}%` }}
                ></div>
              </div>

              <p>EG: {char.eg}/{char.maxEg}</p>
              <div className="h-2 bg-gray-700 rounded-md overflow-hidden">
                <div
                  className="h-full bg-yellow-500"
                  style={{ width: `${(char.eg / char.maxEg) * 100}%` }}
                ></div>
              </div>

              <p>MD: {char.md}/{char.maxMd}</p>
              <div className="h-2 bg-gray-700 rounded-md overflow-hidden">
                <div
                  className="h-full bg-green-500"
                  style={{ width: `${(char.md / char.maxMd) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
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
