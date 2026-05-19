import { FaCode } from "react-icons/fa";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header className="flex justify-between items-center px-8 py-4 bg-gradient-to-r from-blue-950 to-blue-900 text-white fixed w-full z-50 shadow-lg ">
      <div className="flex items-center gap-3 cursor-default">
        <div className="text-4xl text-blue-400">
          <FaCode />
        </div>
        <div className="text-2xl font-bold">Khalilov Aga</div>
      </div>
      <ul className="flex gap-8 items-center">
        <li>
          <Link to="/" className="hover:text-blue-300 transition duration-300 font-semibold">Home</Link>
        </li>
        <li>
          <Link to="/projects" className="hover:text-blue-300 transition duration-300 font-semibold">Projects</Link>
        </li>
        <li>
          <Link to="/skills" className="hover:text-blue-300 transition duration-300 font-semibold">Skills</Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-blue-300 transition duration-300 font-semibold">Contact Me</Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
