import { useContextData } from "../contexts/LanguageContext";

function Header() {
    const { header } = useContextData();
    return (
        <div className="flex flex-col gap-2 pt-5">
            <div className="flex justify-end items-center gap-4 text-sm font-bold tracking-wider text-indigo-900">

                {/* SOL TARAF: Dark Mode Toggle (Input + Label Yapısı) */}
                <div className="flex items-center gap-3">
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" />
                        {/* Switch'in Gövdesi */}
                        <div className="w-12 h-5 bg-[#4731D3] rounded-full peer peer-focus:outline-none transition-colors duration-300"></div>
                        {/* Switch'in İçindeki Sarı Top */}
                        <div className="absolute top-0.5 left-0.5 w-4 h-4 bg-[#FFE86E] rounded-full transition-all duration-300"></div>
                    </label>
                    <span className="text-[#777777] text-sm font-bold">DARK MODE</span>
                </div>
                <span className="text-[#777777] text-sm font-bold">|</span>
                {/* SAĞ TARAF: Dil Değiştirme Butonu */}
                <button className="text-[#777777] text-sm font-bold">
                    <span className="text-[#4731D3]">TÜRKÇE</span>'YE GEÇ
                </button>
            </div>
            <div className="flex justify-between">
                <span className="w-14 h-14 text-logo-600 bg-[#EEEBFF] rounded-full flex items-center justify-center font-bold text-2xl rotate-40">A</span>
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