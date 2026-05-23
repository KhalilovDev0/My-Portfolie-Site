import { useState } from "react";
import "devicon/devicon.min.css";
import { motion } from "framer-motion";

function Skills() {
  const [selectedCategory, setSelectedCategory] = useState("ProgrammingLanguage");

  const skills = {
    ProgrammingLanguage: [
      { id: "js", name: "JavaScript", icon: "javascript-plain" },
      { id: "ts", name: "TypeScript", icon: "typescript-plain" },
      { id: "cs", name: "C#", icon: "csharp-plain" },
      { id: "py", name: "Python", icon: "python-plain" },
    ],
    Framework: [
      { id: "react", name: "React", icon: "react-original" },
      { id: "tail", name: "Tailwind CSS", icon: "tailwindcss-original" },
      { id: "material", name: "Material UI", icon: "materialui-plain" },
      { id: "framer", name: "Framer Motion", icon: "framermotion-plain" },
    ],
    Other: [
      { id: "git", name: "Git", icon: "git-plain" },
      { id: "dock", name: "Unity", icon: "unity-plain" },
      { id: "aws", name: "Linux", icon: "linux-plain" },
    ],
  };

  const categories = [
    { id: "ProgrammingLanguage", label: "Proqramlaşdırma Dilləri" },
    { id: "Framework", label: "Framework & Kitabxanalar" },
    { id: "Other", label: "Alətlər & Digər" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="w-full min-h-screen bg-linear-to-br from-slate-950 via-blue-950 to-slate-950 text-white flex justify-center items-center py-12">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col gap-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full items-center"
      >

        <motion.div variants={itemVariants} className="text-center gap-2 flex flex-col">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Bacarıqlar & Texnologiyalar
          </h1>
          <p className="text-slate-400 text-xs md:text-sm lg:text-base">
            Mütəmadi olaraq istifadə etdiyim və layihələrimdə tətbiq etdiyim alətlər
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="flex gap-2 justify-center flex-wrap p-1.5 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-2 rounded-xl text-xs md:text-sm lg:text-base font-medium transition-all duration-300 cursor-pointer relative z-10 ${
                  isActive ? "text-white" : "text-slate-400 hover:text-white "
                }`}
              >
                <span className="relative z-20">{cat.label}</span>
                {isActive && (
                  <motion.div
                    layoutId="activeSkillTab"
                    className="z-1 absolute inset-0 bg-linear-to-r from-blue-600 to-cyan-600 rounded-xl shadow-lg shadow-blue-500/20"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="w-full min-h-50 bg-white/2 border border-white/10 p-8 rounded-3xl backdrop-blur-xl shadow-2xl relative overflow-hidden flex justify-center items-center"
        >
          <div className="absolute -top-24 -left-24 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full justify-center">
            {skills[selectedCategory].map((skill, index) => (
              <motion.div
                key={`${selectedCategory}-${skill.id}`} 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.05,
                  ease: "easeOut",
                }}
                className="group flex flex-col items-center justify-center p-5 bg-white/3 border border-white/5 hover:border-cyan-500/40 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/5 cursor-pointer"
              >
                <i
                  className={`devicon-${skill.icon} text-3xl md:text-4xl lg:text-5xl text-slate-400 group-hover:text-cyan-400 transition-colors duration-300`}
                ></i>
                <span className="mt-3 text-xs md:text-xs lg:text-sm font-medium text-slate-400 group-hover:text-white transition-colors duration-300 text-center">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </motion.div>
    </div>
  );
}

export default Skills;