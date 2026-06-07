import { createContext, useContext } from "react";
import { data } from "../data/data";
import usePreference from "../hooks/usePreference";
import { toast } from "react-toastify";

const LanguageContext = createContext();

function LanguageContextProvider({ children }) {
    const [language, setLanguage] = usePreference("lang", "en");
    const toggleLanguage = () => setLanguage(language === "en" ? "tr" : "en");
    const contextData = data[language];
    return (
        <LanguageContext.Provider value={{ language, contextData, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    )
}

export default LanguageContextProvider;
export const useLanguage = () => useContext(LanguageContext);