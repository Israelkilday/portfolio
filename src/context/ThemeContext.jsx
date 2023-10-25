import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const [mainColor, setMainColor] = useState("#0ef");

    return (
        <ThemeContext.Provider value={{ mainColor, setMainColor, }}>
            {children}
        </ThemeContext.Provider>
    );
};

export function useTheme() {
    return useContext(ThemeContext);
}