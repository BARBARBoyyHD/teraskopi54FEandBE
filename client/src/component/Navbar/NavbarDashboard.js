import React, { useEffect, useState } from "react";
import Logo from "../../asset/Teraskopilogo.png";
import { FaCartArrowDown, FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import SideBarMenu from "../Sidebar/SideBarMenu";

const NavbarDashboard = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const handleToCart = () => {
    navigate("/pages/Cart");
  };

  const handleResize = () => {
    // Check if the window width is less than the breakpoint for mobile (e.g., 768px)
    setIsMobile(window.innerWidth < 768);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  useEffect(() => {
    // Add event listener on component mount
    window.addEventListener("resize", handleResize);
    handleResize(); // Call once on mount to set initial state

    return () => {
      // Clean up event listener on component unmount
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#272525] shadow-md border-b z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 py-3">
        {/* Logo Section */}
        <div className="flex items-center">
          <img src={Logo} alt="Teras Kopi Logo" className="h-12 w-auto mr-2" />
          <span className="hidden md:block text-xl font-semibold text-gray-800">
            Teras Kopi
          </span>
        </div>

        {/* Sidebar Toggle for Mobile */}
        {isMobile && (
          <button
            className="text-white hover:text-green-500 focus:outline-none focus:ring-2 focus:ring-green-300 md:hidden"
            aria-label="Toggle Sidebar"
            onClick={toggleSidebar}
          >
            <FaBars size={24} />
          </button>
        )}

        {/* Action Buttons */}
        <div className="flex items-center space-x-4">
          {/* Cart Icon */}
          <button
            className="text-white hover:text-green-500 focus:outline-none focus:ring-2 focus:ring-green-300"
            aria-label="Cart"
            onClick={handleToCart}
          >
            <FaCartArrowDown size={24} />
          </button>
        </div>
      </div>

      {/* Sidebar on Mobile */}
      {isMobile && isSidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50"
          onClick={closeSidebar} // Close sidebar when clicking outside
        >
          <div
            className="fixed left-0 top-0 z-50  w-64 h-full"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the sidebar
          >
            <button
              className="absolute top-4 right-4 text-white text-xl"
              onClick={closeSidebar}
            >
              <FaTimes />
            </button>
            <SideBarMenu />
          </div>
        </div>
      )}

      {/* Sidebar on Larger Screens (Always Visible) */}
      {!isMobile && (
        <div className="md:block fixed z-40  h-full w-64 ">
          <SideBarMenu />
        </div>
      )}
    </nav>
  );
};

export default NavbarDashboard;
