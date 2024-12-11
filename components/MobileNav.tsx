"use client";
import React from "react";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { sidebarLinks } from "@/constants";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function MobileNav() {
  const pathname = usePathname();
  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger asChild>
          <Image
            src="/icons/hamburger.svg"
            alt=""
            width={32}
            height={32}
            className="cursor-pointer sm:hidden"
          />
        </SheetTrigger>
        <SheetContent className="bg-dark-1 border-none">
          <div className="flex flex-col items-start gap-4 mt-6">
            {sidebarLinks.map((link, index) => {
              const isActive =
                link.route === pathname ||
                pathname.startsWith(`${link.route}/`);

              return (
                <SheetClose asChild key={link.route}>
                  <Link
                    href={link.route}
                    className={cn(
                      "flex justify-start gap-4 w-full py-3 px-4 rounded-lg",
                      {
                        "bg-blue-1": isActive,
                      }
                    )}
                  >
                    <Image
                      src={link.icon}
                      width={24}
                      height={24}
                      alt={link.label}
                    />
                    <p>{link.label}</p>
                  </Link>
                </SheetClose>
              );
            })}
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
}

export default MobileNav;
