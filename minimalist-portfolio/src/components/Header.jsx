import { useLanguage } from "../contexts/LanguageContext";
import { useTheme } from "../contexts/ThemeContext";
import { toast } from "react-toastify";

function Header() {
    const { language, contextData, toggleLanguage } = useLanguage();
    const { header } = contextData;
    const { theme, toggleTheme } = useTheme();

    const handleLanguageChange = () => {
        toggleLanguage();
        language === "en" ? toast.success("Türkçe'ye Geçildi...") : toast.success("Switched to English...")
    }
    return (
        <div className="flex flex-col gap-7 pt-5">
            <div className="flex justify-end items-center gap-4 text-sm font-bold tracking-wider text-indigo-900">

                {/* SOL TARAF: Dark Mode Toggle (Input + Label Yapısı) */}
                <div className="flex items-center gap-3">
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox"
                            onChange={toggleTheme}
                            checked={theme === "light"}
                            className="sr-only peer" />
                        {/* Switch'in Gövdesi */}
                        <div className="w-12 h-5 bg-[#4731D3] dark:bg-[#3A3A3A] rounded-full peer peer-focus:outline-none"></div>
                        {/* Switch'in İçindeki Sarı Top */}
                        <div className="absolute top-0.5 left-0.5 w-4 h-4 bg-[#FFE86E] rounded-full transition-all duration-300 peer-checked:translate-x-7 overflow-hidden"></div>
                        <div className="absolute w-3 h-3 rounded-full left-1 bg-[#4731D3] dark:bg-[#3A3A3A] translate-x-1.5 peer-checked:bg-transparent "></div>
                    </label>
                    <span className="text-[#777777] text-sm font-bold dark:text-[#D9D9D9]">{theme === "dark" ? header.lightModeText : header.darkModeText}</span>
                </div>
                <span className="text-[#777777] text-sm font-bold">|</span>
                {/* SAĞ TARAF: Dil Değiştirme Butonu */}
                <button className="text-[#777777] text-sm font-bold cursor-pointer" onClick={handleLanguageChange}>
                    {header.langSuffix1}<span className="text-[#4731D3] dark:text-[#B7AAFF]">{header.langBase}</span>{header.langSuffix2}
                </button>
            </div>
            <div className="flex justify-between">
                <span className="w-14 h-14 text-[#7B61FF] dark:text-[#8F88FF] bg-[#EEEBFF] dark:bg-[#4731D3] rounded-full flex items-center justify-center font-bold text-2xl rotate-40">A</span>
                <nav className="flex items-center">
                    {header.list.map((item, index) => (
                        <a key={index} href="" className="button-header">{item}</a>
                    ))}
                </nav>
            </div>
        </div>
    )
}

export default Header;