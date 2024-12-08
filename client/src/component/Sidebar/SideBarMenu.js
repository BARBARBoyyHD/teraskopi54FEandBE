import React, { useState } from "react";
import { FaHome, FaFileAlt, FaBox, FaCog } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";

const SideBarMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div
        className={`${
          isOpen ? "w-64" : "w-16"
        } bg-gray-800 text-white h-full transition-all duration-300`}
      >
        {/* Toggle Button */}
        <div className="p-4 flex justify-between items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Sidebar"
            aria-expanded={isOpen}
            className="focus:outline-none text-gray-300"
          >
            {isOpen ? "Close" : "Open"}
          </button>
        </div>

        {/* Navigation Menu */}
        <nav className="mt-4">
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded-md"
              >
                <span>
                  <FaHome />
                </span>
                {isOpen && <span>Dashboard</span>}
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded-md"
              >
                <span>
                  <FaFileAlt />
                </span>
                {isOpen && <span>Reports</span>}
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded-md"
              >
                <span>
                  <FaBox />
                </span>
                {isOpen && <span>Products</span>}
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded-md"
              >
                <span>
                  <FiLogOut />
                </span>
                {isOpen && <span>Logout</span>}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default SideBarMenu;
