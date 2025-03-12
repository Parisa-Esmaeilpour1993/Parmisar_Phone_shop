"use client";

import { navLinksLocalization } from "@/constants/localization/Localization";
import { navLinks } from "@/utils/navLinks";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useRef, useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isNewsOpen, setIsNewsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsNewsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsNewsOpen(false);
    }, 1000);
  };

  return (
    <nav className="flex items-center justify-center gap-8">
      {navLinks.map((link) =>
        link.path === "/news" ? (
          <div
            key={link.path}
            className="relative group cursor-pointer"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <span
              className={`text-gray-700 hover:text-blue-500 transition-all  ${
                pathname === link.path ? "text-blue-600 font-bold" : ""
              }`}
            >
              {link.title}
            </span>
            <span
              className={`absolute left-0 bottom-[-2px] h-[3px] bg-blue-600 transition-all duration-300 ${
                pathname === link.path ? "w-full" : "w-0 group-hover:w-full"
              }`}
            />
            {isNewsOpen && (
              <div
                className="absolute -left-16 mt-2 w-36 bg-white shadow-lg rounded-lg border border-gray-300 z-50 text-center"
                onMouseEnter={() => setIsNewsOpen(true)}
                onMouseLeave={() => setIsNewsOpen(false)}
              >
                <Link
                  href="/news/latest"
                  className="block px-4 py-2 hover:bg-gray-100 hover:rounded-t-lg relative after:content-[''] after:block after:w-24 after:h-0.5 after:bg-gray-200 after:mt-1 after:mx-auto hover:after:bg-blue-400"
                >
                  {navLinksLocalization.newestNews}
                </Link>
                <Link
                  href="/news/technology"
                  className="block px-4 py-2 hover:bg-gray-100 relative after:content-[''] after:block after:w-24 after:h-0.5 after:bg-gray-200 after:mt-1 after:mx-auto hover:after:bg-blue-400"
                >
                  {navLinksLocalization.techNews}
                </Link>
                <Link
                  href="/news/mobile"
                  className="block px-4 py-2 hover:bg-gray-100 hover:rounded-b-lg relative after:content-[''] after:block after:w-24 after:h-0.5 after:bg-gray-200 after:mt-1 after:mx-auto hover:after:bg-blue-400"
                >
                  {navLinksLocalization.mobileNews}
                </Link>
              </div>
            )}
          </div>
        ) : (
          <Link key={link.path} href={link.path} className="relative group">
            <span
              className={`text-gray-700 hover:text-blue-500 transition-all duration-300 ${
                pathname === link.path ? "font-bold" : ""
              }`}
            >
              {link.title}
            </span>
            <span
              className={`absolute left-0 -bottom-1 h-[2px] bg-blue-600 transition-all duration-300 ${
                pathname === link.path ? "w-full" : "w-0 group-hover:w-full"
              }`}
            />
          </Link>
        )
      )}
    </nav>
  );
}
