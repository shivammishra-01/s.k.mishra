import React, { useState, useEffect } from "react";
import { MdMenu, MdClose, MdWbSunny, MdNightsStay } from "react-icons/md";
import { Link } from "react-scroll";

function Navbar() {
  const [menu, setMenu] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const navItems = [
    { id: 1, text: "Home" },
    { id: 2, text: "About" },
    { id: 3, text: "Experience" },
    { id: 4, text: "Project" },
    { id: 5, text: "Contact" }, // Ensure this matches with the contact section ID
  ];

  useEffect(() => {
    const savedTheme = localStorage.getItem("darkMode");
    if (savedTheme) {
      setDarkMode(savedTheme === "true");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-16 bg-gradient-to-r from-blue-500 to-teal-500 dark:from-gray-900 dark:to-gray-700 shadow-md transition duration-300">
      <div className="container mx-auto px-6 md:px-8 h-full flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <a href="https://www.linkedin.com/in/shivam-kumar-615109262/">
            <img
              src="/photo.avif"
              className="h-12 w-12 rounded-full border border-white dark:border-gray-600"
              alt="Profile"
            />
          </a>
          <div>
            <a href="https://www.linkedin.com/in/shivam-kumar-615109262/">
              <h1 className="text-white text-2xl font-bold">S.K.Mishra</h1>
              <p className="text-gray-200 text-sm">Web Developer</p>
            </a>
          </div>
        </div>
        {/* Desktop Navbar */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8 text-white">
            {navItems.map(({ id, text }) => (
              <li
                className="transition-transform duration-300 transform hover:scale-105 cursor-pointer hover:text-yellow-300"
                key={id}
              >
                <Link
                  to={text === "Contact" ? "contactPage" : text} // Match with the contact section ID
                  smooth={true}
                  duration={500}
                  offset={-70}
                  activeClass="text-yellow-300 font-bold"
                >
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Dark Mode Toggle and Mobile Menu Icon */}
        <div className="flex items-center space-x-4">
          <div
            onClick={() => setDarkMode(!darkMode)}
            className="text-white cursor-pointer"
          >
            {darkMode ? <MdWbSunny size={24} /> : <MdNightsStay size={24} />}
          </div>
          <div
            onClick={() => setMenu(!menu)}
            className="md:hidden text-white cursor-pointer"
            aria-expanded={menu}
            aria-controls="mobile-menu"
          >
            {menu ? <MdClose size={24} /> : <MdMenu size={24} />}
          </div>
        </div>
      </div>
      {/* Mobile Navbar */}
      {menu && (
        <div
          id="mobile-menu"
          className="fixed inset-y-0 left-0 w-1/2 bg-gray-900 bg-opacity-90 dark:bg-gray-800 transition duration-300"
        >
          <div className="flex flex-col h-full p-4">
            {/* Profile Section */}
            <div className="flex flex-col items-center mb-4">
              <img
                src="/photo.avif"
                className="h-24 w-24 rounded-full border border-white dark:border-gray-600"
                alt="Profile"
              />
              <h1 className="text-white text-xl font-bold mt-2">S.K.Mishra</h1>
              <p className="text-gray-300 text-sm">Web Developer</p>
            </div>
            {/* Navigation Links */}
            <div className="flex flex-col flex-grow justify-center">
              <ul className="space-y-4 text-white flex flex-col items-center">
                {navItems.map(({ id, text }) => (
                  <li
                    className="text-xl font-semibold cursor-pointer hover:text-yellow-300 transition duration-300"
                    key={id}
                  >
                    <Link
                      onClick={() => setMenu(false)}
                      to={text === "Contact" ? "contactPage" : text} // Match with the contact section ID
                      smooth={true}
                      duration={500}
                      offset={-70}
                      activeClass="text-yellow-300 font-bold"
                    >
                      {text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
