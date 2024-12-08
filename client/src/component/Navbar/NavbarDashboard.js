import React from "react";
import Logo from "../../asset/Teraskopilogo.png";
import { FaCartArrowDown, FaSearch } from "react-icons/fa";

const NavbarDashboard = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md border-b z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 py-3">
        {/* Logo Section */}
        <div className="flex items-center">
          <img src={Logo} alt="Teras Kopi Logo" className="h-12 w-auto mr-2" />
          <span className="hidden md:block text-xl font-semibold text-gray-800">
            Teras Kopi
          </span>
        </div>

        {/* Search Bar */}
        <div className="flex-grow mx-4 hidden md:flex items-center">
          <div
            className="relative w-full md:w-1/2 lg:w-1/3" // Full width on small, 50% on medium, 33% on large screens
          >
            <input
              type="search"
              placeholder="Search..."
              className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
            />
            <button
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-green-500 focus:outline-none"
              aria-label="Search"
            >
              <FaSearch size={18} />
            </button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-4">
          {/* Cart Icon */}
          <button
            className="text-gray-600 hover:text-green-500 focus:outline-none focus:ring-2 focus:ring-green-300"
            aria-label="Cart"
          >
            <FaCartArrowDown size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Search Bar */}
      <div className="px-4 py-2 md:hidden">
        <div className="flex items-center border border-gray-300 rounded-lg">
          <input
            type="search"
            placeholder="Search..."
            className="flex-grow px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 rounded-l-lg"
          />
          <button
            className="px-4 py-2 bg-gray-100 text-gray-500 hover:text-green-500 rounded-r-lg focus:outline-none"
            aria-label="Search"
          >
            <FaSearch size={18} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavbarDashboard;
