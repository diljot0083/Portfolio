import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaMapPin } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="bg-white shadow-md overflow-x-hidden">

      <div className="max-w-8xl mx-auto flex justify-between items-center md:px-6 md:py-4.5 px-4 py-4">

        <div className="text-2xl inline-block transition transform duration-300 hover:scale-110">
          <NavLink to="/">
            <FaMapPin />
          </NavLink>
        </div>

        <ul className="flex flex-wrap gap-6 text-md font-semibold overflow-hidden">
          <li>
            <NavLink
              to="/home"
              className="inline-block transition transform duration-300 hover:scale-110"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="inline-block transition transform duration-300 hover:scale-110"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className="inline-block transition transform duration-300 hover:scale-110"
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="inline-block transition transform duration-300 hover:scale-110 mr-2"
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
