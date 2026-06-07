import { createContext, useContext } from "react";

const ThemeContext = createContext();

function ThemeContextProvider({ children }) {

    return (
        <ThemeContext.Provider value={{}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider;
export const useTheme = () => useContext(ThemeContext);