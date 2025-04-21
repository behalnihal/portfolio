"use client";

import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      type="button"
      size="icon"
      className="px-2"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <SunIcon className="h-5 w-5 text-neutral-800 dark:hidden dark:text-neutral-200" />
      <MoonIcon className="hidden h-5 w-5 text-neutral-800 dark:block dark:text-neutral-200" />
    </Button>
  );
}
