import { FaDiscord, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="flex justify-between items-center py-8 px-8 bg-linear-to-r from-blue-950 to-blue-900 text-white shadow-lg ">
      <ul className="text-2xl flex gap-6 items-center">
        <a href="https://github.com/Appleex0" target="_blank"  className="cursor-pointer hover:text-blue-300 transition duration-300 transform hover:scale-110">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/khalilov_dev/" target="_blank" className="cursor-pointer hover:text-blue-300 transition duration-300 transform hover:scale-110">
          <FaInstagram />
        </a>
        <a href="https://www.linkedin.com/in/a%C4%9Fa-x%C9%99lilov-36a878372/" target="_blank" className="cursor-pointer hover:text-blue-300 transition duration-300 transform hover:scale-110">
          <FaLinkedin />
        </a>
        <a href="https://discord.com/users/1004812474115178616" target="_blank" className="cursor-pointer hover:text-blue-300 transition duration-300 transform hover:scale-110">
          <FaDiscord />
        </a>
      </ul>
      <div className="text-sm text-gray-300">© 2026 My Portfolio. All rights reserved.</div>
    </footer>
  );
}

export default Footer;
