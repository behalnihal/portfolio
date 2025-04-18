"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaMoon, FaSun } from "react-icons/fa";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  return (
    <header className="flex h-16 items-center px-4 container mx-auto">
      <div
        className="absolute top-0 left-0 w-full h-[200px] rotate-[180deg] -z-10"
        style={{
          maskImage: "linear-gradient(transparent, black 85%)",
          backgroundColor: "#c05d5d65",
        }}
      />
      {/* Logo  */}
      <div className="flex-1 z-10">
        <Image
          src="/logo.svg"
          alt="logo"
          height={30}
          width={30}
          className="dark:filter dark:invert"
        />
      </div>

      {/* Buttons  */}

      <div className="flex items-center space-x-4 z-10">
        <Link
          href="/"
          className="font-light text-neutral-500 hover:text-neutral-500 dark:hover:text-neutral-300"
        >
          Home
        </Link>
        <Link
          href="/projects"
          className="font-light text-neutral-500 hover:text-neutral-500 dark:hover:text-neutral-300"
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
          {theme === "dark" ? (
            <FaSun className="w-5 h-5 transition-colors duration-300 hover:text-blue-500" />
          ) : (
            <FaMoon className="w-5 h-5 transition-colors duration-300 hover:text-blue-500" />
          )}
        </button>
      </div>
    </header>
  );
}
