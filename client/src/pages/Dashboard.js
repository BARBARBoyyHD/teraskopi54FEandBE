import React from "react";
import NavbarDashboard from "../component/Navbar/NavbarDashboard";
import SideBarMenu from "../component/Sidebar/SideBarMenu";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-zinc-100flex flex-col ">
      {/* Header with Navbar */}
      <header className="bg-transparent">
        <NavbarDashboard />
      </header>

      {/* Main Content */}
      <main className="px-4 py-8 mt-24 flex flex-row gap-3">
        <div className="">
          <SideBarMenu />
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <h1 className="text-2xl font-bold text-gray-800">
            Welcome to Dashboard
          </h1>
          <p className="mt-4 text-gray-600">
            Your dashboard content goes here. Customize it to your needs!
          </p>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
