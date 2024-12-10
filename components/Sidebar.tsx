"use client";

import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function Sidebar() {
  const pathname = usePathname();
  return (
    <div className="min-w-64 bg-dark-1 sticky top-0 left-0 h-screen pt-24">
      <div className="flex flex-col items-start px-3 gap-4">
        {sidebarLinks.map((link, index) => {
          const isActive =
            link.route === pathname || pathname.startsWith(`${link.route}/`);

          return (
            <Link
              href={link.route}
              key={index}
              className={cn(
                "flex justify-start gap-4 w-full py-3 px-4 rounded-lg",
                {
                  "bg-blue-1": isActive,
                }
              )}
            >
              <Image src={link.icon} width={24} height={24} alt={link.label} />
              <p>{link.label}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Sidebar;
