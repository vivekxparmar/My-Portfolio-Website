import { useState } from "react";
import { Link } from "react-router-dom";
import { IoListCircle, IoCloseCircle } from "react-icons/io5";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="flex justify-between items-center px-6 md:px-[210px] py-4 shadow-md bg-white fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <Link to="/">
        <h1 className= "urbanist text-2xl font-semibold text-black hover:text-indigo-700 transition-colors cursor-pointer">
          Vivek Parmar
        </h1>
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-8 text-lg font-medium">
        {["About", "Projects", "Skills", "Contact"].map((text) => (
          <Link
            key={text}
            to={`/${text.toLowerCase()}`}
            className="hover:text-indigo-600 transition-colors duration-300"
          >
            {text}
          </Link>
        ))}
        <a
          href="/Vivek_Resume.pdf"
          download
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-full transition-all duration-300 shadow-md hover:scale-105"
        >
          Resume
        </a>
      </div>

      {/* Mobile Menu Icon */}
      <div
        className="md:hidden text-3xl text-black cursor-pointer hover:text-indigo-600 transition-all"
        onClick={toggleMenu}
      >
        <IoListCircle />
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-white shadow-lg z-50 transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-500 ease-in-out`}
      >
        <div className="flex justify-end items-center px-6 py-[17px] border-b">
          {/* <h2 className="text-xl font-bold text-indigo-600">Menu</h2> */}
          <div
            onClick={closeMenu}
            className="text-3xl cursor-pointer text-black hover:text-indigo-600 transition-all"
          >
            <IoCloseCircle />
          </div>
        </div>

        <div className="flex flex-col px-8 py-6 space-y-6 text-lg font-medium">
          {["About", "Projects", "Skills", "Contact"].map((text) => (
            <Link
              key={text}
              to={`/${text.toLowerCase()}`}
              onClick={closeMenu}
              className="hover:text-indigo-600 transition-colors duration-300"
            >
              {text}
            </Link>
          ))}
          <a
            href="/Vivek_Resume.pdf"
            download
            onClick={closeMenu}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-full text-center transition-all duration-300 shadow-md hover:scale-105"
          >
            Resume
          </a>
          <div className="flex justify-center space-x-6 mt-6 pt-6 border-t">
            <a
              href="https://github.com/vivekxparmar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-600 hover:text-indigo-600 transition-colors duration-300"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/vivek-parmar-047009261/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-600 hover:text-indigo-600 transition-colors duration-300"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://x.com/VivekParmar000"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-600 hover:text-indigo-600 transition-colors duration-300"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
