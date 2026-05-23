import { useState } from "react";
import { FaCode } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { Drawer } from "@mui/material";
import { IoReorderThreeOutline } from "react-icons/io5";
function Header() {
  const navItems = [
    { path: "/", label: "Ana Səhifə" },
    { path: "/projects", label: "Layihələr" },
    { path: "/skills", label: "Bacarıqlar" },
    { path: "/contact", label: "Əlaqə" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/40 backdrop-blur-md border-b border-white/5 shadow-lg transition-all duration-300">
      <Drawer
        anchor="right"
        className=" text-white backdrop-blur-sm md:hidden "
        open={isOpen}
        onClose={() => setIsOpen(false)}
        onClick={() => setIsOpen(false)}
      >
        <nav className="w-64 h-full bg-slate-950/90 p-6">
          <ul className="flex flex-col gap-8 items-center">
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `text-sm font-semibold tracking-wide transition-all duration-300 relative py-1.5 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-linear-to-r after:from-cyan-400 after:to-blue-500 after:transition-all after:duration-300 ${
                      isActive
                        ? "text-cyan-400 after:w-full"
                        : "text-slate-300 hover:text-white after:w-0 hover:after:w-full"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </Drawer>
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex justify-between items-center">
        <div className="flex items-center gap-3 cursor-pointer group">
          <div className="text-2xl md:text-2xl lg:text-3xl text-cyan-400 group-hover:text-blue-500 transition-colors duration-300 transform group-hover:scale-110">
            <FaCode />
          </div>
          <div className="text-lg md:text-xl lg:text-2xl font-extrabold tracking-tight bg-linear-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent group-hover:from-cyan-400 group-hover:to-blue-500 transition-all duration-500">
            Khalilov{" "}
            <span className="text-cyan-400 group-hover:text-white transition-colors duration-500">
              Dev
            </span>
          </div>
        </div>

        <nav>
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            <IoReorderThreeOutline className="text-4xl text-white cursor-pointer " />
          </button>
          <ul className="gap-8 items-center hidden md:flex">
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `text-sm font-semibold tracking-wide transition-all duration-300 relative py-1.5 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-linear-to-r after:from-cyan-400 after:to-blue-500 after:transition-all after:duration-300 ${
                      isActive
                        ? "text-cyan-400 after:w-full"
                        : "text-slate-300 hover:text-white after:w-0 hover:after:w-full"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
