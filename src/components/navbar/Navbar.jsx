import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-md">
      <div className="text-xl font-bold">MyPortfolio</div>
      <ul className="flex gap-6 text-md font-semibold overflow-hidden">

        <li><NavLink to="/home"
          className="inline-block transition transform duration-300 hover:scale-110 hover:shadow-lg">
          Home
        </NavLink></li>

        <li><NavLink to="/about"
          className="inline-block transition transform duration-300 hover:scale-110 hover:shadow-lg">
          About
        </NavLink></li>

        <li><NavLink to="/projects"
          className="inline-block transition transform duration-300 hover:scale-110 hover:shadow-lg">
          Projects
        </NavLink></li>

        <li><NavLink to="/contact" className="inline-block transition transform duration-300 hover:scale-110 hover:shadow-lg mr-2">
          Contact
        </NavLink></li>

      </ul>
    </nav>
  );
}

export default Navbar;
