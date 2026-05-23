import "devicon/devicon.min.css"; 
import { motion } from "framer-motion"; 

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, 
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

function Projects() {
  const projectList = [
    {
      title: "My Todo App V2",
      description: "Əvvəlki Todo tətbiqimin daha inkişaf etmiş və TypeScript ilə yenilənmiş versiyası.",
      link: "https://github.com/Appleex0/my-todo-app-v2",
      tags: ["React", "TypeScript", "Tailwind"],
      isActive: true,
    },
    {
      title: "Azerbaijan Weather App",
      description: "Azərbaycan üçün hava proqnozu göstərən veb tətbiq.",
      link: "https://github.com/Appleex0/Weather-App-Azerbaijan",
      tags: ["JavaScript", "CSS3", "Weather API"],
      isActive: true,
    },
    {
      title: "Heyvanat",
      description: "Ev heyvanların satışı üçün e-ticarət platforması.",
      link: "#",
      tags: ["React", "Node.js", "SQL Server"],
      isActive: false,
    },
    {
      title: "FastDisk Education",
      description: "Müxtəlif proqramlaşdırma dilləri öyrənmək üçün interaktiv platforma.",
      link: "#",
      tags: ["React", "ASP.NET", "SQL Server"],
      isActive: false,
    },
    {
      title: "Game Wiki",
      description: "Oyunlar haqqında ətraflı məlumat mərkəzi və fərdiləşdirilmiş wiki platforması.",
      link: "#",
      tags: ["React", "Node.js", "MongoDB"],
      isActive: false,
    },
  ];

  return (
    <div className="w-full min-h-screen bg-linear-to-br from-slate-950 via-blue-950 to-slate-950 text-white flex justify-center items-center py-16 relative overflow-x-hidden">
      
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-64 h-64 bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none z-0"></div>

      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        <motion.div
          className="text-center mb-12 flex flex-col gap-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            My Projects
          </h1>
          <p className="text-slate-400 text-sm md:text-base lg:text-lg">
            İnkişaf etdirdiyim real layihələr və üzərində işlədiyim ideyalar
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projectList.map((project, index) => {
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className={`group flex flex-col justify-between p-6 rounded-2xl border transition-all duration-300 relative overflow-hidden backdrop-blur-xl lg:gap-5  ${
                  project.isActive
                    ? "bg-white/5 border-white/10 hover:border-cyan-500/40 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/5"
                    : "bg-white/2 border-white/5 opacity-60"
                }`}
              >
                {!project.isActive && (
                  <span className="absolute top-3 right-3 bg-blue-500/10 text-blue-400 text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full border border-blue-500/20">
                    Coming Soon
                  </span>
                )}

                <div>
                  <h2 className={`text-lg md:text-xl lg:text-2xl font-bold mb-3 transition-colors duration-300 ${project.isActive ? "group-hover:text-cyan-400 text-white" : "text-slate-500"}`}>
                    {project.title}
                  </h2>

                  <p className="text-slate-400  leading-relaxed mb-6 text-sm md:text-base lg:text-base">
                    {project.description}
                  </p>
                </div>

                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tIndex) => (
                      <span
                        key={tIndex}
                        className={` font-medium px-2.5 py-0.5 rounded-md text-xs md:text-sm ${
                          project.isActive
                            ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/10"
                            : "bg-slate-500/10 text-slate-500 border border-slate-500/10"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => {
                      if (project.isActive) {
                        window.open(project.link, "_blank");
                      }
                    }}
                    className={`w-full py-2.5 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                      project.isActive
                        ? "bg-linear-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-500/10 hover:shadow-cyan-500/20 hover:scale-[1.02] cursor-pointer"
                        : "bg-white/5 text-slate-500 border border-white/5 cursor-not-allowed"
                    }`}
                    disabled={!project.isActive}
                  >
                    <span className="text-sm md:text-base lg:text-base">{project.isActive ? "View Code" : "In Progress"}</span>
                    {project.isActive && (
                      <i className="devicon-github-original text-sm md:text-base lg:text-lg"></i>
                    )}
                  </button>
                </div>

              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}

export default Projects;