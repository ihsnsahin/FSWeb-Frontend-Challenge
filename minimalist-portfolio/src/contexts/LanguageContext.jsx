import { createContext, useContext, useEffect } from "react";
import { localData } from "../data/data";
import usePreference from "../hooks/usePreference";
import usePostRequest from "../hooks/usePostRequest";
import Loading from "../components/Loading";
import { toast } from "react-toastify";
import Error from "../components/Error";

const LanguageContext = createContext();

function LanguageContextProvider({ children }) {
    const [language, setLanguage] = usePreference("lang", "en");
    const toggleLanguage = () => setLanguage(language === "en" ? "tr" : "en");

    const contextData = localData[language];

    return (
        <LanguageContext.Provider value={{ language, contextData, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    )
}

export default LanguageContextProvider;
export const useLanguage = () => useContext(LanguageContext);