import { Link } from "react-router-dom";

export default function LoadCharacter() {
  return (
    <div className="h-screen flex justify-center items-center">
      <h1 className="text-3xl font-bold text-white">Load Character Page</h1>

      {/* Button to go back to Home Page */}
      <div className="mt-5">
        <Link to="/">
          <button className="w-60 bg-white/5 backdrop-blur-[2px] font-bold px-4 py-2 rounded-full transition duration-300 shadow-md hover:scale-105 active:scale-98">
            BACK TO HOME
          </button>
        </Link>
      </div>
    </div>
  );
}