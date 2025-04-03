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
      <div className="">
        <button
          className="border p-1 border-neutral-500 rounded-sm hover:text-neutral-400"
          onClick={() =>
            theme == "dark" ? setTheme("light") : setTheme("dark")
          }
        >
          {theme === "dark" ? <FaMoon /> : <FaSun />}
        </button>
      </div>
    </div>
  );
}
