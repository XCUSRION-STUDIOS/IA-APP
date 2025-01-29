import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import backgroundImage from '../assets/darkimg2.png';
import Logo from '../assets/xcursionlogo.png';

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
];

export default function LoadCharacter() {
  return (
    <div
      className="h-screen w-screen bg-cover bg-center flex flex-col items-center justify-center text-white"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Logo Section */}
      <div className="absolute top-10">
        <img src={Logo} alt="XCURSION STUDIOS" className="h-10" />
      </div>

      {/* Character Cards */}
      <div className="space-y-5 w-150 max-w-3xl">
        {characters.map((char, index) => (
          <div
            key={index}
            className="p-4 h-35  bg-white/5 backdrop-blur-[2px] rounded-lg shadow-sm flex justify-between items-center"
          >
            {/* Left Column: Character Info */}
            <div className="flex flex-col space-y-0.5">
              <h2 className="text-xl font-light tracking-wide font-[Metropolis]">{char.name}</h2>
              <p className="text-2xl font-bold">Level {char.level}</p>
              <p className="text-[0.75em]">Class: {char.class}</p>
              <p className="text-[0.75em]">Title: {char.title}</p>
              <p className="text-[0.75em]">Days Since Ascension: {char.daysSinceAscension}</p>
            </div>

            {/* Right Column: HP, EG, MD Bars */}
            <div className="flex flex-col space-y-1.5 w-48">
              <div className="flex items-center">
                <p className="text-[0.75em] w-8 text-right mr-2">HP:</p>
                <div className="flex-1 h-1 bg-gray-700 rounded-md overflow-hidden">
                  <div
                    className="h-full bg-red-500"
                    style={{ width: `${(char.hp / char.maxHp) * 100}%` }}
                  ></div>
                </div>
              </div>

              <div className="flex items-center">
                <p className="text-[0.75em] w-8 text-right mr-2">EG:</p>
                <div className="flex-1 h-1 bg-gray-700 rounded-md overflow-hidden">
                  <div
                    className="h-full bg-yellow-500"
                    style={{ width: `${(char.eg / char.maxEg) * 100}%` }}
                  ></div>
                </div>
              </div>

              <div className="flex items-center">
                <p className="text-[0.75em] w-8 text-right mr-2">MD:</p>
                <div className="flex-1 h-1 bg-gray-700 rounded-md overflow-hidden">
                  <div
                    className="h-full bg-green-500"
                    style={{ width: `${(char.md / char.maxMd) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* LOAD Button */}
      <Link to="/">
        <button className="w-30 mt-10 px-6 py-2 text-base text-black bg-white rounded-full hover:bg-gray-300 transition">
          LOAD
        </button>
      </Link>

      {/* Exit Button */}
      <Link to="/">
        <button className="w-30 mt-3 px-6 py-2 text-base text-black bg-white rounded-full hover:bg-gray-300 transition">
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

