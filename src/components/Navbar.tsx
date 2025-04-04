"use client";

import { useTheme } from "next-themes";
import Link from "next/link";
import { FaMoon, FaSun } from "react-icons/fa";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="flex h-16 items-center px-4 container mx-auto">
      {/* Logo  */}
      <div className="flex-1">
        <Link href="/" className="flex items-center">
          <span className="font-light text-neutral-400 hover:text-neutral-500 dark:hover:text-neutral-300">
            Nihal
          </span>
        </Link>
      </div>

      {/* Theme  */}
      <div className="flex items-center space-x-4">
        <button
          className="cursor-pointer"
          onClick={() =>
            theme === "light" ? setTheme("dark") : setTheme("light")
          }
        >
          {theme === "light" ? (
            <FaSun className="transition-colors duration-300 hover:text-blue-500" />
          ) : (
            <FaMoon className="transition-colors duration-300 hover:text-blue-500" />
          )}
        </button>
      </div>
    </div>
  );
}
