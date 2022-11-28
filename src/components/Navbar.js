import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [isScrolling, setIsScrolling] = useState(false);
    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const handleScroll = () => {
        if (window.scrollY > 0) {
            setIsScrolling(true);
        } else {
            setIsScrolling(false);
        }
    };

    const NavbarLinks = [
        {
            title: "Home",
            path: "/",
        },
        {
            title: "Blog",
            path: "/blog",
        },
        {
            title: "Projects",
            path: "/projects",
        },
        {
            title: "Roadmaps",
            path: "/roadmaps",
        },
        {
          title: "About",
          path: "/about",
      },
      {
        title: "Contact",
        path: "/contact",
    },
    ];

    return (
      // nav ->  bottom border shadow
      <nav class={`flex items-center justify-between z-50 flex-wrap bg-white pr-4 pl-4 pt-1 pb-1 lg:pl-20 lg:pr-20 ${showMenu ? "text-left": "text-center"} border-b border-gray-200 shadow-sm sticky top-0`}>
        <div class="flex items-center flex-shrink-0 text-slate-800 mr-6">
          <Link to="/">
          <img
            src="https://www.lpu.in/images/logo/logo.svg"
            class="mr-2 h-[60px] w-[120px]"
            alt="Logo"
          />
          </Link>
          <Link to="/" class="font-bold text-xl">LPU CSE</Link>
        </div>
        <div class="block lg:hidden">
          <button
            class="flex items-center px-3 py-2 border rounded text-slate-800 border-gray-200 hover:text-slate-500 hover:border-gray-500"
            onClick={toggleMenu}
          >
            <svg
              class="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${
            showMenu ? "block" : "hidden"
          }`}
        >
          <div class="text-md lg:flex-grow">
            {NavbarLinks.map((link, index) => (
              <Link
                to={link.path}
                class="block mt-4 lg:inline-block lg:mt-0 text-slate-800 hover:text-slate-500 font-semibold mr-4"
                key={index}
              >
                {link.title}
              </Link>
            ))}
          </div>
          <div>
            <a
              href="https://github.com/sauravhathi/lpu-cse"
              class="inline-block text-md px-4 py-2 leading-none border rounded text-slate-800 border-sky-900 hover:border-transparent hover:text-white hover:bg-slate-600 mt-4 lg:mt-0"
            >
              Github
            </a>
          </div>
        </div>
      </nav>
    );
};

export default Navbar;

   