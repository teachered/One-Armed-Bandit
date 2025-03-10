import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const [darkMode, setDarkMode] = useState(localStorage.getItem("theme") === "dark");

  // Dropdown states
  const [supervisedOpen, setSupervisedOpen] = useState(false);
  const [unsupervisedOpen, setUnsupervisedOpen] = useState(false);
  const [reinforcementOpen, setReinforcementOpen] = useState(false);

  return (
    <nav className="bg-gray-100 shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-gray-900 tracking-wide">
          AI 1
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `px-4 py-2 rounded-md text-lg font-medium transition ${
                isActive ? "bg-blue-500 text-white shadow-md" : "text-gray-900 hover:bg-gray-200"
              }`
            }
          >
            Home
          </NavLink>

          {/* Övervakad inlärning Dropdown */}
          <div className="relative">
            <button
              className="px-4 py-2 rounded-md text-lg font-medium text-gray-900 hover:bg-gray-200"
              onClick={() => setSupervisedOpen(!supervisedOpen)}
            >
              Övervakad inlärning ▾
            </button>
            {supervisedOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md">
                <NavLink to="/supervised/classification" className="block px-4 py-2 hover:bg-gray-200">Klassificering</NavLink>
                <NavLink to="/supervised/regression" className="block px-4 py-2 hover:bg-gray-200">Regression</NavLink>
              </div>
            )}
          </div>

          {/* Oövervakad inlärning Dropdown */}
          <div className="relative">
            <button
              className="px-4 py-2 rounded-md text-lg font-medium text-gray-900 hover:bg-gray-200"
              onClick={() => setUnsupervisedOpen(!unsupervisedOpen)}
            >
              Oövervakad inlärning ▾
            </button>
            {unsupervisedOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md">
                <NavLink to="/unsupervised/clustering" className="block px-4 py-2 hover:bg-gray-200">Klustring</NavLink>
                <NavLink to="/unsupervised/dimensionality" className="block px-4 py-2 hover:bg-gray-200">Dimensionalitetsreduktion</NavLink>
              </div>
            )}
          </div>

          {/* Förstärkningsinlärning Dropdown */}
          <div className="relative">
            <button
              className="px-4 py-2 rounded-md text-lg font-medium text-gray-900 hover:bg-gray-200"
              onClick={() => setReinforcementOpen(!reinforcementOpen)}
            >
              Förstärkningsinlärning ▾
            </button>
            {reinforcementOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md">
                <NavLink to="/reinforcement/q-learning" className="block px-4 py-2 hover:bg-gray-200">Q-learning</NavLink>
                <NavLink to="/reinforcement/policy" className="block px-4 py-2 hover:bg-gray-200">Policy-baserad</NavLink>
              </div>
            )}
          </div>
        </div>

        {/* Dark Mode Toggle (Temporärt bortkommenterad) */}
        {/* <button
          onClick={() => setDarkMode(!darkMode)}
          className="ml-4 text-gray-900 hover:text-blue-500 transition"
        >
          {darkMode ? <FaSun size={24} /> : <FaMoon size={24} />}
        </button> */}

        {/* Mobile Menu Button */}
        <button
          className="md:hidden ml-4 text-gray-900"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-200 flex flex-col items-center py-4">
          <NavLink to="/" className="block px-4 py-2 text-lg text-gray-900 hover:bg-gray-300" onClick={() => setIsOpen(false)}>Home</NavLink>
          
          {/* Mobile Dropdowns */}
          <div className="w-full text-center">
            <button className="block w-full py-2 text-lg text-gray-900 hover:bg-gray-300" onClick={() => setSupervisedOpen(!supervisedOpen)}>Övervakad inlärning ▾</button>
            {supervisedOpen && (
              <div className="w-full bg-gray-300">
                <NavLink to="/supervised/classification" className="block px-4 py-2" onClick={() => setIsOpen(false)}>Klassificering</NavLink>
                <NavLink to="/supervised/regression" className="block px-4 py-2" onClick={() => setIsOpen(false)}>Regression</NavLink>
              </div>
            )}
          </div>

          <div className="w-full text-center">
            <button className="block w-full py-2 text-lg text-gray-900 hover:bg-gray-300" onClick={() => setUnsupervisedOpen(!unsupervisedOpen)}>Oövervakad inlärning ▾</button>
            {unsupervisedOpen && (
              <div className="w-full bg-gray-300">
                <NavLink to="/unsupervised/clustering" className="block px-4 py-2" onClick={() => setIsOpen(false)}>Klustring</NavLink>
                <NavLink to="/unsupervised/dimensionality" className="block px-4 py-2" onClick={() => setIsOpen(false)}>Dimensionalitetsreduktion</NavLink>
              </div>
            )}
          </div>

          <div className="w-full text-center">
            <button className="block w-full py-2 text-lg text-gray-900 hover:bg-gray-300" onClick={() => setReinforcementOpen(!reinforcementOpen)}>Förstärkningsinlärning ▾</button>
            {reinforcementOpen && (
              <div className="w-full bg-gray-300">
                <NavLink to="/reinforcement/one-armed-bandit" className="block px-4 py-2" onClick={() => setIsOpen(false)}>Q-learning</NavLink>
                <NavLink to="/reinforcement/q-learning" className="block px-4 py-2" onClick={() => setIsOpen(false)}>Q-learning</NavLink>
                <NavLink to="/reinforcement/policy" className="block px-4 py-2" onClick={() => setIsOpen(false)}>Policy-baserad</NavLink>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
