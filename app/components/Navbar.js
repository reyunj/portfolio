"use client";
import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaMoon, FaSun } from "react-icons/fa";
import Link from "next/link";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [theme, setTheme] = useState("light");

  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "experience" },
    { id: 4, link: "portfolio" },
    { id: 5, link: "contact" },
  ];

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.classList.add(storedTheme);
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.style.setProperty('--background', '#1a1a1a');
      document.documentElement.style.setProperty('--foreground', '#eaeaea');
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.style.setProperty('--background', '#ffffff');
      document.documentElement.style.setProperty('--foreground', '#333333');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className="flex justify-between items-center w-full h-15 p-4 text-gray-500 dark:text-white bg-gray-100 dark:bg-black fixed">
      <div className="mx-7">
        <Link href="/" passHref>
          <h4 className="text-4xl uppercase font-bold text-gray-900 dark:text-white cursor-pointer">
            JU<span className="text-cyan-600">NR</span>EY
          </h4>
        </Link>
      </div>

      <div className="hidden md:flex items-center">
        <ul className="flex">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize font-medium hover:text-cyan-600 hover:scale-105 duration-200"
            >
              <Link href={`#${link}`}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
        <button
          onClick={toggleTheme}
          className="text-gray-900 dark:text-white"
        >
          {theme === "light" ? (
            <FaMoon size={20} className="hover:text-cyan-600 hover:scale-105" />
          ) : (
            <FaSun size={20} className="hover:text-cyan-600 hover:scale-105"/>
          )}
        </button>
      </div>
      <div className="md:hidden flex items-center space-x-4">
        <button
          onClick={toggleTheme}
          className="text-gray-900 dark:text-white"
        >
          {theme === "light" ? (
            <FaMoon size={20} className="hover:text-cyan-600 hover:scale-105" />
          ) : (
            <FaSun size={20} className="hover:text-cyan-600 hover:scale-105"/>
          )}
        </button>

        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer pl-4 z-10"
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-white dark:bg-black dark:bg-gradient-to-b dark:from-black dark:to-gray-800 text-gray-500">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl hover:text-cyan-600"
            >
              <Link
                onClick={() => setNav(!nav)}
                href={`#${link}`}
                scroll={false}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
