import { useEffect, useState } from "react";

type Theme = "dark" | "light";
function useDarkMode(): [Theme, (theme: Theme) => void] {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme") as Theme | null;
      if (savedTheme) {
        return savedTheme;
      } else {
        const userMedia = window.matchMedia("(prefers-color-scheme: dark)");
        return userMedia.matches ? "dark" : "light";
      }
    }
    return "dark"; // Default value (this won't be used since typeof window will be true in a browser environment)
  });

  useEffect(() => {
    const root = window.document.documentElement;
    // Set root class and `prefers-color-scheme`
    root.classList.remove(theme === "dark" ? "light" : "dark");
    root.classList.add(theme);
    root.style.setProperty("color-scheme", theme);

    localStorage.setItem("theme", theme);

    const userMedia = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e: MediaQueryListEvent) =>
      setTheme(e.matches ? "dark" : "light");
    userMedia.addEventListener("change", handleChange);

    return () => {
      userMedia.removeEventListener("change", handleChange);
    };
  }, [theme]);

  return [theme, setTheme];
}

export default useDarkMode;
