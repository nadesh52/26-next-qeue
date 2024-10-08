"use client";
import { HomeIcon, MagnifyingGlassIcon, UserIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavMenu = () => {
  const pathName = usePathname();
  const basePath = `/${pathName.split('/')[1]}`

  return (
    <nav className="flex flex-col divide-y divide-slate-200 rounded-md bg-white py-2">
      <Link href="/" className={`${basePath === "/" ? "active" : "inactive"}`}>
        <div className="pointer-events-none flex h-16 w-full items-center gap-6 p-4">
          <HomeIcon className="size-6" />
          <p className="text-xl tracking-wide">Home</p>
        </div>
      </Link>

      <Link
        href="/search"
        className={`${basePath === "/search" || basePath === '/u' ? "active" : "inactive"}`}
      >
        <div className="pointer-events-none flex h-16 w-full items-center gap-6 p-4">
          <MagnifyingGlassIcon className="size-6" />
          <p className="text-xl tracking-wide">Search</p>
        </div>
      </Link>
    </nav>
  );
};

export default NavMenu;
