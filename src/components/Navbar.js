import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-purple-950 ${
        isScrolled ? "bg-opacity-50" : ""
      }`}
      style={{ transition: "background-color 0.3s ease" }}
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            {/* You can add a logo or site title here */}
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a
                href="/"
                className={`text-white ${
                  isScrolled ? "hover:text-black" : ""
                } hover:font-bold px-3 py-2 rounded-md text-sm font-medium`}
              >
                Home
              </a>
              <a
                href="/about"
                className={`text-white ${
                  isScrolled ? "hover:text-black" : ""
                } hover:font-bold px-3 py-2 rounded-md text-sm font-medium`}
              >
                About
              </a>
              <a
                href="/skills"
                className={`text-white ${
                  isScrolled ? "hover:text-black" : ""
                } hover:font-bold px-3 py-2 rounded-md text-sm font-medium`}
              >
                Skills
              </a>
              <a
                href="/projects"
                className={`text-white ${
                  isScrolled ? "hover:text-black" : ""
                } hover:font-bold px-3 py-2 rounded-md text-sm font-medium`}
              >
                Projects
              </a>
              <a
                href="/contact"
                className={`text-white ${
                  isScrolled ? "hover:text-black" : ""
                } hover:font-bold px-3 py-2 rounded-md text-sm font-medium`}
              >
                Contact
              </a>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleNavbar}
              className="text-white hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
            >
              <svg
                className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
              <svg
                className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a
            href="/"
            className={`text-white ${
              isScrolled ? "hover:text-gray-300" : ""
            } hover:font-bold block px-3 py-2 rounded-md text-base font-medium`}
          >
            Home
          </a>
          <a
            href="/about"
            className={`text-white ${
              isScrolled ? "hover:text-gray-300" : ""
            } hover:font-bold block px-3 py-2 rounded-md text-base font-medium`}
          >
            About
          </a>
          <a
            href="/skills"
            className={`text-white ${
              isScrolled ? "hover:text-gray-300" : ""
            } hover:font-bold block px-3 py-2 rounded-md text-base font-medium`}
          >
            Skills
          </a>
          <a
            href="/projects"
            className={`text-white ${
              isScrolled ? "hover:text-gray-300" : ""
            } hover:font-bold block px-3 py-2 rounded-md text-base font-medium`}
          >
            Projects
          </a>
          <a
            href="/contact"
            className={`text-white ${
              isScrolled ? "hover:text-gray-300" : ""
            } hover:font-bold block px-3 py-2 rounded-md text-base font-medium`}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
