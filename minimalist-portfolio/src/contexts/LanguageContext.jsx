import { createContext, useContext } from "react";
import { data } from "../data/data";

const LanguageContext = createContext();

function LanguageContextProvider({ children }) {
    const contextData = data["en"];
    return (
        <LanguageContext.Provider value={contextData}>
            {children}
        </LanguageContext.Provider>
    )
}

export default LanguageContextProvider;
export const useLanguage = () => useContext(LanguageContext);