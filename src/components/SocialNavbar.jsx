import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Dark Mode Toggle Component
function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(() => {
    // Check if user has previously set a preference
    if (typeof window !== "undefined") {
      const savedMode = localStorage.getItem("darkMode");
      return (
        savedMode === "true" ||
        (!savedMode &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      );
    }
    return false;
  });

  useEffect(() => {
    // Apply dark mode class to html element
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="rounded-full p-1.5 bg-gray-200 dark:bg-gray-700 focus:outline-none transition-colors duration-200"
      title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      {darkMode ? (
        <svg
          className="w-5 h-5 text-yellow-500"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
            clipRule="evenodd"
          />
        </svg>
      ) : (
        <svg
          className="w-5 h-5 text-gray-600"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
      )}
    </button>
  );
}

// Profile Menu Component
function ProfileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="relative">
      <button
        onClick={toggleMenu}
        className="flex items-center focus:outline-none"
      >
        <img
          src="https://via.placeholder.com/40"
          alt="Profile"
          className="w-10 h-10 rounded-full border-2 border-blue-500"
        />
        <span className="ml-2 hidden md:block text-gray-800 dark:text-gray-200">
          John Doe
        </span>
        <svg
          className={`ml-1 h-5 w-5 transition-transform text-gray-600 dark:text-gray-300 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 z-10">
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-blue-500 hover:text-white"
          >
            My Profile
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-blue-500 hover:text-white"
          >
            Account Settings
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-blue-500 hover:text-white"
          >
            Saved Posts
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-blue-500 hover:text-white"
          >
            Activity Log
          </a>
          <hr className="my-1 border-gray-200 dark:border-gray-700" />
          <a
            href="#"
            className="block px-4 py-2 text-red-600 dark:text-red-400 hover:bg-red-500 hover:text-white"
          >
            Sign Out
          </a>
        </div>
      )}
    </div>
  );
}

// Search Component
function SearchBar() {
  return (
    <div className="relative max-w-md w-full">
      <input
        type="text"
        placeholder="Search..."
        className="w-full px-4 py-2 pl-10 pr-4 rounded-full border border-gray-300 dark:border-gray-600 
                   bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 
                   focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
      <div className="absolute left-3 top-2.5">
        <svg
          className="h-5 w-5 text-gray-400 dark:text-gray-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
    </div>
  );
}

// Notification Badge
function NotificationBadge({ count }) {
  return (
    <div className="relative">
      <svg
        className="h-7 w-7 text-gray-700 dark:text-gray-300"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
        />
      </svg>
      {count > 0 && (
        <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
          {count > 9 ? "9+" : count}
        </span>
      )}
    </div>
  );
}

// Message Badge
function MessageBadge({ count }) {
  return (
    <div className="relative">
      <svg
        className="h-7 w-7 text-gray-700 dark:text-gray-300"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
        />
      </svg>
      {count > 0 && (
        <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
          {count > 9 ? "9+" : count}
        </span>
      )}
    </div>
  );
}

export function SocialNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Close mobile menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-10 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-blue-600 dark:text-blue-400 font-bold text-2xl">
                IncognitiX
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <SearchBar />

            <a
              href="#"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              <svg
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            </a>

            <a
              href="#"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              <svg
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </a>

            <a
              href="#"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              <svg
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </a>

            <a
              href="#"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              <MessageBadge count={3} />
            </a>

            <a
              href="#"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              <NotificationBadge count={12} />
            </a>

            <DarkModeToggle />

            <ProfileMenu />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            {/* Dark Mode Toggle for Mobile */}
            <DarkModeToggle />

            {/* Notification and Messages for Mobile */}
            <div className="flex items-center space-x-4 mx-2">
              <a href="#" className="text-gray-700 dark:text-gray-300">
                <MessageBadge count={3} />
              </a>
              <a href="#" className="text-gray-700 dark:text-gray-300">
                <NotificationBadge count={12} />
              </a>
            </div>

            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none"
            >
              <svg
                className={`${isMenuOpen ? "hidden" : "block"} h-6 w-6`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isMenuOpen ? "block" : "hidden"} h-6 w-6`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isMenuOpen ? "block" : "hidden"} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <div className="px-3 py-2">
            <SearchBar />
          </div>

          <Link
            to="/"
            className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800"
            onClick={toggleMenu}
          >
            <svg
              className="h-6 w-6 mr-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            Home
          </Link>

          <Link
            to="/explore"
            className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800"
            onClick={toggleMenu}
          >
            <svg
              className="h-6 w-6 mr-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            Explore
          </Link>

          <Link
            to="/create"
            className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800"
            onClick={toggleMenu}
          >
            <svg
              className="h-6 w-6 mr-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
            Create Post
          </Link>

          <Link
            to="/messages"
            className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800"
            onClick={toggleMenu}
          >
            <svg
              className="h-6 w-6 mr-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
              />
            </svg>
            Messages{" "}
            <span className="ml-1 bg-red-500 text-white rounded-full text-xs px-1.5">
              3
            </span>
          </Link>

          <Link
            to="/notifications"
            className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800"
            onClick={toggleMenu}
          >
            <svg
              className="h-6 w-6 mr-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            Notifications{" "}
            <span className="ml-1 bg-red-500 text-white rounded-full text-xs px-1.5">
              12
            </span>
          </Link>

          <Link
            to="/profile"
            className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800"
            onClick={toggleMenu}
          >
            <img
              src="https://via.placeholder.com/40"
              alt="Profile"
              className="w-6 h-6 rounded-full mr-3"
            />
            Profile
          </Link>
        </div>
      </div>
    </nav>
  );
}
