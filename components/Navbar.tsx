import Image from "next/image";
import React from "react";

function Navbar() {
  return (
    <div className="bg-dark-1 sticky top-0 left-0 w-full min-h-16 flex-between px-4">
      <div className="flex-center gap-2">
        <Image src="/icons/logo.svg" width={32} height={32} alt="logo" />
        <p className="text-3xl font-extrabold">Room</p>
      </div>
      <div className="bg-white rounded-full w-8 h-8"></div>
    </div>
  );
}

export default Navbar;
