import { createContext, useContext, useEffect, useState } from "react";
import { myData } from "../data/data";
import usePreference from "../hooks/usePreference";
import usePostRequest from "../hooks/usePostRequest";
import Loading from "../components/Loading";
import { toast } from "react-toastify";
import Error from "../components/Error";

const LanguageContext = createContext();

function LanguageContextProvider({ children }) {
    const [language, setLanguage] = usePreference("lang", "en");
    const toggleLanguage = () => setLanguage(language === "en" ? "tr" : "en");

    const [contextData, setContextData] = useState(null)
    const { data, loading, error, postRequest } = usePostRequest();
    useEffect(() => {
        postRequest("https://reqres.in/api/workintech", myData, {
            headers: {
                "x-api-key": "pub_e7c920192e6ad11f207689543c903ef5bb08cd256b7799510de8af441cd410a4",
            }
        }

        );
    }, []);
    useEffect(() => {
        if (data) {
            setContextData(data[language]);
        }
    }, [data, language]);


    if (error) return <Error language={language} />
    if (loading || !contextData) return <Loading language={language} />;

    return (
        <LanguageContext.Provider value={{ language, contextData, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    )
}

export default LanguageContextProvider;
export const useLanguage = () => useContext(LanguageContext);