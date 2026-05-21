import { Link } from "react-router-dom";
import Typewriter from "../components/Typewriter";

function Home() {
  const myTitles = ["Xəlilov Ağaşirin", "Frontend Tərtibatçı"]; 

  return (
    <div className="w-full min-h-screen bg-linear-to-br from-blue-900 via-blue-800 to-blue-950 text-white flex justify-start items-center transition-all pl-15">
      <div className="max-w-4xl flex flex-col w-full">
        <h1 className="flex flex-wrap items-center gap-x-4 text-6xl md:text-5xl font-bold mb-4">
          <span>Salam, Mən </span>
          <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-400 whitespace-nowrap">
            <Typewriter words={myTitles} speed={120} delay={2500} />
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl">
          Gözəl və funksional veb layihələr yaradan həvəskar frontend proqramçı. Gəlin birlikdə möhtəşəm bir iş ortaya qoyaq!
        </p>
        <div className="flex gap-4 mt-10">
          <Link to="/projects">
            <button className="px-8 py-3 bg-linear-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 rounded-lg font-semibold transition duration-300 shadow-lg cursor-pointer">
              Layihələrimi Gör
            </button>
          </Link>
          <Link to="/contact">
            <button className="px-8 py-3 border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-blue-900 rounded-lg font-semibold transition duration-300 cursor-pointer">
              Əlaqə Saxla
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
