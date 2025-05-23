"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiSun, FiMoon } from "react-icons/fi";
import { FaBars } from "react-icons/fa";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check for saved theme
    const savedTheme = localStorage.getItem("theme");
    setIsDarkMode(savedTheme === "dark");

    // Update class on initial load
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("theme", !isDarkMode ? "dark" : "light");
    document.documentElement.classList.toggle("dark");
  };

  const menuVariants = {
    open: { x: 0, transition: { type: "spring", stiffness: 300, damping: 30 } },
    closed: { x: "-100%", transition: { duration: 0.3 } },
  };

  const navLinks = [
    { name: "Tools", path: "/tools" },
    { name: "Developers", path: "/developers" },
  ];

  return (
    <header className="bg-blue-950 dark:bg-gray-900 p-6 flex items-center justify-between w-full fixed z-50">
      <Link href={"/"}>
        {" "}
        <span className="text-2xl font-serif bg-blue-900 py-3 px-3 rounded-xl">
          <span className="bg-blue-800 py-[9px] px-[9px] rounded-xl text-blue-200 dark:text-blue-300">
            devStack
          </span>
        </span>
      </Link>

      <div className="flex items-center gap-4">
        <button
          onClick={toggleTheme}
          className="text-white dark:text-gray-100 p-2 rounded-full hover:bg-blue-900 dark:hover:bg-gray-800 transition-colors"
        >
          {isDarkMode ? <FiSun size={24} /> : <FiMoon size={24} />}
        </button>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white p-2 rounded-full hover:bg-blue-900 dark:hover:bg-gray-800 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX size={24} /> : <FaBars size={24} />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className="text-white dark:text-gray-100 hover:text-blue-300 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed top-0 left-0 h-full w-64 bg-white dark:bg-gray-800 shadow-lg lg:hidden z-50"
          >
            <div className="p-4 flex flex-col gap-4">
              <button
                className="self-end text-gray-800 dark:text-gray-100 p-[10px] bg-gray-300 dark:bg-gray-700 rounded-sm mb-10"
                onClick={() => setIsOpen(false)}
              >
                <FiX size={24} />
              </button>
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  className="text-gray-800 dark:text-gray-100 hover:text-blue-500 dark:hover:text-blue-400 transition-colors h-16 text-3xl bg-gray-300 dark:bg-gray-700 py-7 flex justify-start items-center p-1 rounded-sm"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 lg:hidden z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </header>
  );
}
