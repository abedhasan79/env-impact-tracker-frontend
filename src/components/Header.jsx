import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-green-700 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-bold">Carbon Footprint Estimator</h1>

        {/* Desktop nav */}
        <nav className="hidden md:flex space-x-6">
          <a href="#calculator" className="hover:underline">Calculator</a>
          <a href="#results" className="hover:underline">Results</a>
        </nav>

        {/* Hamburger button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <nav className="md:hidden bg-green-600">
          <a
            href="#calculator"
            className="block px-4 py-2 hover:bg-green-700"
            onClick={() => setIsOpen(false)}
          >
            Calculator
          </a>
          <a
            href="#results"
            className="block px-4 py-2 hover:bg-green-700"
            onClick={() => setIsOpen(false)}
          >
            Results
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;