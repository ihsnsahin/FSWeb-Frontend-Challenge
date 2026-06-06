import { createContext, useContext, useState } from "react";
import { data } from "../data/data";

const LanguageContext = createContext();

function LanguageContextProvider({ children }) {
    const [language, setLanguage] = useState("en");
    const toggleLanguage = () => setLanguage(language === "en" ? "tr" : "en");
    const contextData = data[language];
    return (
        <LanguageContext.Provider value={{ contextData, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    )
}

export default LanguageContextProvider;
export const useLanguage = () => useContext(LanguageContext);