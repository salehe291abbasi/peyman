"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { themeContent } from "@/lib/content";

export function ThemeToggle() {
  const [theme, setTheme] = useState("light");
  const [message, setMessage] = useState("");

  useEffect(() => {
    setTheme(
      document.documentElement.dataset.theme === "dark" ? "dark" : "light",
    );
  }, []);

  useEffect(() => {
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute(
        "content",
        document.documentElement.dataset.theme === "dark"
          ? "#101425"
          : "#ffffff",
      );
  }, [theme]);

  function selectTheme(next: "light" | "dark") {
    document.documentElement.dataset.theme = next;
    setTheme(next);
    setMessage("");
    try {
      localStorage.setItem("peyman-theme", next);
    } catch {
      setMessage(themeContent.storageUnavailable);
    }
  }

  return (
    <>
      <div className="pl-theme-control">
        <button
          className="pl-theme-toggle"
          type="button"
          role="switch"
          aria-label={themeContent.label}
          aria-checked={theme === "dark"}
          onClick={() =>
            selectTheme(
              document.documentElement.dataset.theme === "dark"
                ? "light"
                : "dark",
            )
          }
        >
          <Sun
            className="pl-theme-sun"
            size={19}
            strokeWidth={1.65}
            aria-hidden="true"
          />
          <Moon
            className="pl-theme-moon"
            size={19}
            strokeWidth={1.65}
            aria-hidden="true"
          />
        </button>
        <span className="pl-theme-tooltip" aria-hidden="true">
          {theme === "dark" ? themeContent.toLight : themeContent.toDark}
        </span>
      </div>
      <span className="sr-only" role="status">
        {message}
      </span>
    </>
  );
}
