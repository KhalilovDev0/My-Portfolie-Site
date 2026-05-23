import { Link } from "react-router-dom";
import Typewriter from "../components/Typewriter";
import { motion } from "framer-motion";

function Home() {
  const myTitles = ["Xəlilov Ağa", "Frontend Tərtibatçı"];
  const isMobile = window.innerWidth < 640;
  return (
    <div className="w-full min-h-screen bg-linear-to-br from-slate-950 via-blue-950 to-slate-950 text-white flex justify-start items-center transition-all overflow-x-hidden">
      <div className="flex flex-col w-full justify-between items-start gap-6 px-4 py-16 md:py-20 relative z-10 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.h1
          className="flex flex-col flex-wrap items-start gap-x-2 text-3xl md:text-4xl md:flex-row lg:text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <span>Salam, Mən </span>
          <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-400 whitespace-nowrap">
            <Typewriter words={myTitles} speed={120} delay={2500} />
          </span>
        </motion.h1>

        <motion.p
          className="text-base md:text-lg lg:text-lg text-gray-200 leading-relaxed max-w-2xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          Gözəl və funksional veb layihələr yaradan həvəskar frontend proqramçı.
          Gəlin birlikdə möhtəşəm bir iş ortaya qoyaq!
        </motion.p>

        <div className="flex flex-col gap-3 mt-8 w-full sm:w-auto sm:flex-row sm:items-center">
          <motion.button
            className="w-full sm:w-auto px-5 py-3 lg:px-6 lg:py-3 text-sm md:text-base lg:text-base bg-linear-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 rounded-lg font-semibold transition duration-300 shadow-lg cursor-pointer text-center"
            initial={{ opacity: 0, y: isMobile ? 0 : 45 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.35 }}
          >
            <Link to="/projects" className="block w-full h-full">
              Layihələrimi Gör
            </Link>
          </motion.button>

          <motion.button
            className="w-full sm:w-auto px-5 py-3 lg:px-6 lg:py-3 text-sm md:text-base lg:text-base border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-blue-900 rounded-lg font-semibold transition duration-300 cursor-pointer text-center"
            initial={{ opacity: 0, y: isMobile ? 0 : 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          >
            <Link to="/contact" className="block w-full h-full">
              Əlaqə Saxla
            </Link>
          </motion.button>
        </div>
      </div>
    </div>
  );
}

export default Home;
