import { createContext, useContext, useEffect } from "react";
import { localData } from "../data/data";
import usePreference from "../hooks/usePreference";
import usePostRequest from "../hooks/usePostRequest";
import Loading from "../components/Loading";
import { toast } from "react-toastify";

const LanguageContext = createContext();

function LanguageContextProvider({ children }) {
    const [language, setLanguage] = usePreference("lang", "en");
    const toggleLanguage = () => setLanguage(language === "en" ? "tr" : "en");

    const { data: contextData, loading, error, postRequest } = usePostRequest();
    useEffect(() => {
        postRequest("https://reqres.in/api/workintech", localData[language], {
            headers: {
                "x-api-key": "pub_c0d1a2eb022a51e95b1549b39de6f7400ab19335bca9699f0034834cdc8945bb",
            }
        });
    }, [language]);


    if (loading || !contextData) return <Loading language={language} />;
    if (error) return toast.error(language === "en" ? "An error occurred..." : "Bir hata oluştu...")

    return (
        <LanguageContext.Provider value={{ language, contextData, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    )
}

export default LanguageContextProvider;
export const useLanguage = () => useContext(LanguageContext);