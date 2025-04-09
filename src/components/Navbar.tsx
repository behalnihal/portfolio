"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaMoon, FaSun } from "react-icons/fa";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="flex h-16 items-center px-4 container mx-auto">
      {/* Logo  */}
      <div className="flex-1">
        <Image
          src="/logo.svg"
          alt="logo"
          height={30}
          width={30}
          className="dark:filter dark:invert"
        />
      </div>

      {/* Buttons  */}

      <div className="flex items-center space-x-4">
        <Link
          href="/"
          className="font-light text-neutral-400 hover:text-neutral-500 dark:hover:text-neutral-300"
        >
          Home
        </Link>
        <Link
          href="/projects"
          className="font-light text-neutral-400 hover:text-neutral-500 dark:hover:text-neutral-300"
        >
          Projects
        </Link>
        <Link
          href="https://github.com/behalnihal"
          target="_blank"
          className=" hover:text-neutral-400"
        >
          <FaGithub className="w-5 h-5" />
        </Link>
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
