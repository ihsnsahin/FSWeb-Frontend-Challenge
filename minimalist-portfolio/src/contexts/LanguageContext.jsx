import { createContext, useContext, useEffect, useState } from "react";
import { data } from "../data/data";
import usePreference from "../hooks/usePreference";
import axios from "axios";

const LanguageContext = createContext();

function LanguageContextProvider({ children }) {
    const [language, setLanguage] = usePreference("lang", "en");
    const toggleLanguage = () => setLanguage(language === "en" ? "tr" : "en");
    const [contextData, setContextData] = useState(null)

    useEffect(() => {
        axios.post("https://reqres.in/api/users", data[language], {
            headers: {
                "x-api-key": "pub_bb6e669884e959413fd1a4f9d6750f26f9a75699353266f035534be0c29b5f3b",
            }
        })
            .then((res) => setContextData(res.data))
            .catch((err) => console.log(err))

    }, [language]);

    if (!contextData) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50 dark:bg-zinc-900 gap-3">
                <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-indigo-600 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                    <div className="w-3 h-3 bg-indigo-600 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                    <div className="w-3 h-3 bg-indigo-600 rounded-full animate-bounce"></div>
                </div>
                <p className="text-sm font-medium text-slate-500 dark:text-zinc-400 tracking-wide animate-pulse">
                    {language === "en" ? "Loading..." : "Yükleniyor..."}
                </p>
            </div>);
    }

    return (
        <LanguageContext.Provider value={{ language, contextData, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    )
}

export default LanguageContextProvider;
export const useLanguage = () => useContext(LanguageContext);