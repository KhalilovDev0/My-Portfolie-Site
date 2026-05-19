function Projects() {
  const projectList = [
    {
      title: "My Todo App V2",
      description: "A simple todo app built with React and TypeScript.",
      link: "https://github.com/Appleex0/my-todo-app-v2",
      isActive: true,
    },
    {
      title: "Azerbaijan Weather App",
      description:
        "A weather app for Azerbaijan built with vanilla JavaScript.",
      link: "https://github.com/Appleex0/Weather-App-Azerbaijan",
      isActive: true,
    },
    {
      title: "Game Wiki",
      description: "Is Coming...",
      link: "#",
      isActive: false,
    },
    {
      title: "Fast Disk Education",
      description: "Is Coming",
      link: "#",
      isActive: false,
    },
  ];
  return (
    <div className="w-full h-full bg-linear-to-br from-blue-900 via-blue-800 to-blue-950 text-white flex justify-center items-center ">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-5xl font-bold mb-12 text-center">My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectList.map((project) => {
            return (
              <div className="flex flex-col justify-between bg-blue-800/50 backdrop-blur-sm rounded-lg p-6 hover:bg-blue-700/50 transition duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-2">
                <h2 className="text-xl font-bold mb-2">{project.title}</h2>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <button
                  onClick={() => {
                    if (project.isActive) {
                      window.open(project.link, "_blank");
                    }
                  }}
                  className={`${project.isActive ? "w-full bg-blue-500 hover:bg-blue-600 py-2 rounded font-semibold transition duration-300 cursor-pointer" : "w-full bg-gray-500 py-2 rounded font-semibold cursor-not-allowed opacity-50"}`}
                  disabled={!project.isActive}
                >
                  View Project
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Projects;
