import { createContext, useContext, useEffect } from "react";
import usePreference from "../hooks/usePreference";
import { toast } from "react-toastify";
import { useLanguage } from "./LanguageContext";


const ThemeContext = createContext();

function ThemeContextProvider({ children }) {

    const { contextData } = useLanguage();
    const { themeContext } = contextData;
    const [theme, setTheme] = usePreference("theme", "light");
    useEffect(() => {
        //HTML elemanı yakaladık
        const root = document.documentElement;

        if (theme === "dark") {
            //Temamız dark ise class ekledi
            root.classList.add("dark")
        } else {
            //Temamız dark değilse class çıkardı
            root.classList.remove("dark")
        }
    }, [theme])

    const toggleTheme = () => {
        if (theme === "dark") {
            setTheme("light")
            toast.success(themeContext.lightModeText)
        } else {
            setTheme("dark")
            toast.success(themeContext.darkModeText)
        }
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider;
export const useTheme = () => useContext(ThemeContext);