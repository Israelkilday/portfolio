import { createContext, useContext, useState, useEffect } from "react";

interface ThemeContextType {
    mainColor: string;
    setMainColor: React.Dispatch<React.SetStateAction<string>>;
}

const ThemeContext = createContext<ThemeContextType | null>(null);

export function ThemeProvider({ children }: {children: React.ReactNode}) {
    const [mainColor, setMainColor] = useState("#0ef");

    return (
        <ThemeContext.Provider value={{ mainColor, setMainColor }}>
            {children}
        </ThemeContext.Provider>
    );
};

export function useTheme() {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error("useTheme deve ser usado dentro de um ThemeProvider");
    }

    return context;
} 