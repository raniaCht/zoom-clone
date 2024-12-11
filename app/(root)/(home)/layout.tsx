import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import React, { ReactNode } from "react";

function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <main className="relative">
      <Navbar />
      <div className="flex flex-row-reverse">
        <section className="flex-1">{children}</section>
        <Sidebar />
      </div>
    </main>
  );
}

export default HomeLayout;
