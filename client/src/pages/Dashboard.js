import React, { useState, useEffect } from "react";
import NavbarDashboard from "../component/Navbar/NavbarDashboard";
import SideBarMenu from "../component/Sidebar/SideBarMenu";

const Dashboard = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    // Check if the window width is less than the breakpoint for mobile (e.g., 768px)
    setIsMobile(window.innerWidth < 768);
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
    <div className="min-h-screen w-full bg-zinc-100 flex flex-col">
      {/* Header with Navbar */}
      <header className="bg-transparent fixed top-0 w-full z-10">
        <NavbarDashboard />
      </header>

      {/* Main Content */}
      <main className="mt-[69px] flex-1 flex flex-row">
        {/* Sidebar - Conditionally Rendered */}
        {!isMobile && (
          <div className="border border-black">
            <SideBarMenu />
          </div>
        )}

        {/* Dashboard Content */}
        <div className="w-full min-h-screen bg-white shadow-md rounded-lg p-4 border border-black">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Welcome to Dashboard
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-gray-100 p-4 rounded-lg shadow">
              <h2 className="text-xl font-semibold text-gray-700">Revenue</h2>
              <p className="text-gray-600 mt-2">Your revenue data goes here</p>
            </div>

            <div className="bg-gray-100 p-4 rounded-lg shadow">
              <h2 className="text-xl font-semibold text-gray-700">
                Items Sold
              </h2>
              <p className="text-gray-600 mt-2">
                Your items sold data goes here
              </p>
            </div>

            <div className="bg-gray-100 p-4 rounded-lg shadow">
              <h2 className="text-xl font-semibold text-gray-700">
                New Customers
              </h2>
              <p className="text-gray-600 mt-2">
                Your new customers data goes here
              </p>
            </div>

            <div className="bg-gray-100 p-4 rounded-lg shadow">
              <h2 className="text-xl font-semibold text-gray-700">
                Total Orders
              </h2>
              <p className="text-gray-600 mt-2">
                Your total orders data goes here
              </p>
            </div>

            <div className="bg-gray-100 p-4 rounded-lg shadow">
              <h2 className="text-xl font-semibold text-gray-700">
                Average Order Value
              </h2>
              <p className="text-gray-600 mt-2">
                Your average order value data goes here
              </p>
            </div>

            <div className="bg-gray-100 p-4 rounded-lg shadow">
              <h2 className="text-xl font-semibold text-gray-700">
                Customer Satisfaction
              </h2>
              <p className="text-gray-600 mt-2">
                Your customer satisfaction data goes here
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
