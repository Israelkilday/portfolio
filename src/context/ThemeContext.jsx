import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const [mainColor, setMainColor] = useState("#0ef");
    // const [theme, setTheme] = useState("light");

    // const toggleTheme = () => {
    //     setTheme(theme === "light" ? "dark" : "light");
    // }

    // useEffect(() => {
    //     const container = document.getElementById(theme + "container");
    //     if (container) {
    //         const body = document.body;
    //         body.style.setProperty("--bg_color", getComputedStyle(container)
    //             .getPropertyValue("--bg_color"));
    //         body.style.setProperty("--text_color", getComputedStyle(container)
    //             .getPropertyValue("--text_color"));
    //     }
    // }, [theme]);

    return (
        <ThemeContext.Provider value={{ mainColor, setMainColor }}>
            {children}
        </ThemeContext.Provider>
    );
};

export function useTheme() {
    return useContext(ThemeContext);
} 