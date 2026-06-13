import { createContext } from "react";

export interface ThemeContextType {
    dark: boolean;
    setDark: React.Dispatch<
        React.SetStateAction<boolean>
    >;
}

export const ThemeContext =
    createContext<ThemeContextType | null>(
        null
    );