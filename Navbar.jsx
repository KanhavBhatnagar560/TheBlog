import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="text-2xl font-bold text-white hover:text-purple-400 transition duration-300"
        >
          BlogApp
        </Link>
        <div className="space-x-4">
          <Link to="/" className="text-lg text-gray-300 hover:text-purple-400 transition duration-300">
            Home
          </Link>
          <Link to="/about" className="text-lg text-gray-300 hover:text-purple-400 transition duration-300">
            About
          </Link>
          <Link to="/contact" className="text-lg text-gray-300 hover:text-purple-400 transition duration-300">
            Contact
          </Link>
          <Link
            to="/addBlog"
            className="text-lg text-gray-300 hover:text-purple-400 transition duration-300"
          >
            +
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
