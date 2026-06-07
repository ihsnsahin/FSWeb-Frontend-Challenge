import { useLanguage } from "../contexts/LanguageContext";
function Footer() {
    const { contextData } = useLanguage();
    const { footer } = contextData;
    return (
        <div className="bg-[#F9F9F9] dark:bg-[#141414] transition-color duration-300">
            <div className="flex flex-col max-w-6xl mx-auto gap-22 pt-21 pb-32">
                <h2 className="text-[42px] font-semibold text-[#1F2937] max-w-lg dark:text-[#AEBCCF] ">{footer.title}</h2>
                <div className="flex justify-between">
                    <div className="text-xl font-medium">
                        <span> 👉 </span>
                        <a href="mailto:almilasucode@gmail.com" className=" text-[#AF0C48] underline dark:text-[#BAB2E7]">
                            {footer.mail}
                        </a></div>

                    <nav>
                        <ul className="flex gap-6 text-lg font-medium">
                            <li><a href="#" target="_blank" rel="noreferrer" className="text-[#0A0A14] dark:text-[#E1E1FF]">{footer.list[0]}</a></li>
                            <li><a href="#" target="_blank" rel="noreferrer" className="text-[#00AB6B]">{footer.list[1]}</a></li>
                            <li><a href="#" target="_blank" rel="noreferrer" className="text-[#0077B5]">{footer.list[2]}</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}
export default Footer;