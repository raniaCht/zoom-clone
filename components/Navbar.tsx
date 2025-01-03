import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";
import MobileNav from "./MobileNav";

function Navbar() {
  return (
    <div className="bg-dark-1 sticky top-0 z-50 left-0 w-full min-h-16 flex-between px-4">
      <div className="flex-center gap-2">
        <Image src="/icons/logo.svg" width={32} height={32} alt="logo" />
        <p className="text-3xl font-extrabold max-sm:hidden">Room</p>
      </div>
      <div className="flex-center gap-2">
        <SignedIn>
          <UserButton />
        </SignedIn>
        <MobileNav />
      </div>
    </div>
  );
}

export default Navbar;
