import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import "./ThemeToggle.css";

export function ThemeToggle() {
    const [theme, setTheme] = useState(() => {
        if (typeof window !== "undefined") {
            return localStorage.getItem("theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
        }
        return "light";
    });

    useEffect(() => {
        const root = window.document.documentElement;
        if (theme === "dark") {
            root.classList.add("dark");
        } else {
            root.classList.remove("dark");
        }
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="theme-toggle-btn"
            aria-label="Toggle theme"
        >
            {theme === "dark" ? (
                <Sun className="theme-icon sun" />
            ) : (
                <Moon className="theme-icon moon" />
            )}
        </button>
    );
}
