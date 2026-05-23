import { FaDiscord, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      id: "github",
      icon: <FaGithub />,
      url: "https://github.com/Appleex0",
      label: "GitHub Profile",
    },
    {
      id: "instagram",
      icon: <FaInstagram />,
      url: "https://www.instagram.com/khalilov_dev/",
      label: "Instagram Profile",
    },
    {
      id: "linkedin",
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/a%C4%9Fa-x%C9%9ylilov-36a878372/",
      label: "LinkedIn Profile",
    },
    {
      id: "discord",
      icon: <FaDiscord />,
      url: "https://discord.com/users/1004812474115178616",
      label: "Discord Server / Profile",
    },
  ];

  return (
    <footer className="w-full bg-white/10 backdrop-blur-md border-t border-white/5 text-white shadow-xl relative z-10">
      <div className="max-w-8xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 py-8 px-4 sm:px-6 lg:px-8">
      
      <ul className="text-2xl flex gap-6 items-center">
        {socialLinks.map((link) => (
          <li key={link.id}>
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer" 
              aria-label={link.label} 
              className="block text-slate-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-110 lg:text-3xl"
            >
              {link.icon}
            </a>
          </li>
        ))}
      </ul>

      <div className="text-xs md:text-lg text-slate-400 text-center sm:text-right font-medium tracking-wide">
        © {currentYear} <span className="text-white hover:text-cyan-400 transition-colors duration-300 cursor-pointer font-semibold">Khalilov Dev</span>. All rights reserved.
      </div>
      
      </div>
    </footer>
  );
}

export default Footer;