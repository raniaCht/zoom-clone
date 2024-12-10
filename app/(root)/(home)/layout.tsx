import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import React from "react";

function HomeLayout() {
  return (
    <main className="relative">
      <Navbar />
      <div className="flex">
        <Sidebar />
      </div>
    </main>
  );
}

export default HomeLayout;
