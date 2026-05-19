import { useState } from "react";
import "devicon/devicon.min.css";
function Skills() {
  const [selectedCategory, setSelectedCategory] = useState(
    "ProgrammingLanguage",
  );

  const skills = {
    ProgrammingLanguage: [
      "javascript-plain",
      "typescript-plain",
      "csharp-plain",
      "python-plain",
    ],
    Framework: ["react-original", "tailwindcss-original", "nodejs-plain"],
    Other: ["git-plain", "docker-plain", "amazonwebservices-original-wordmark"],
  };

  return (
    <div className="w-full h-full bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 text-white flex justify-center items-center  transition-all">
      <div className="flex flex-col gap-5 max-w-5xl px-6 w-full justify-center items-center">
        <h1 className="text-5xl font-bold  text-center">My Skills</h1>
        <div className=" flex flex-col gap-10 w-3/7">
          <div className="flex gap-5 justify-center flex-wrap">
            <div
              className={`border px-2 py-1 rounded-xl cursor-pointer transition-all ${selectedCategory === "ProgrammingLanguage" ? "bg-blue-600" : "hover:bg-blue-600"}`}
              onClick={() => setSelectedCategory("ProgrammingLanguage")}
            >
              Programming Language
            </div>
            <div
              className={`border px-2 py-1 rounded-xl cursor-pointer transition-all ${selectedCategory === "Framework" ? "bg-blue-600" : "hover:bg-blue-600"}`}
              onClick={() => setSelectedCategory("Framework")}
            >
              Framework & Libraries
            </div>
            <div
              className={`border px-2 py-1 rounded-xl cursor-pointer transition-all ${selectedCategory === "Other" ? "bg-blue-600" : "hover:bg-blue-600"}`}
              onClick={() => setSelectedCategory("Other")}
            >
              Other
            </div>
          </div>
          <div className="flex  gap-6 p-4 rounded-xl backdrop-blur-sm text-5xl  justify-center">
            {skills[selectedCategory].map((skill) => {
              return (
                <i
                  className={`devicon-${skill} text-blue-200/60 hover:text-cyan-400 transition-all duration-300 cursor-pointer hover:scale-110`}
                ></i>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
