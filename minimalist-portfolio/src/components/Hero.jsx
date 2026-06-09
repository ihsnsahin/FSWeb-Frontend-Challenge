import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useLanguage } from "../contexts/LanguageContext";

function Hero() {
    const { contextData } = useLanguage();
    const { hero } = contextData;
    return (
        <>
            <section className="flex items-center justify-between gap-10 max-phone:flex-wrap-reverse max-phone:justify-center max-phone-gap-1 max-md:flex-wrap-reverse max-md:gap-5">
                {/*Sol Blok içerik*/}
                <div className="flex items-start flex-col gap-10 max-w-150 max-md:max-w-full">
                    <div className="flex items-center gap-3">
                        <span className="w-20 h-0.5 bg-indigo-700 dark:bg-[#B7AAFF]" />
                        <span className="text-xl font-medium leading-none text-indigo-700 dark:text-[#B7AAFF]" >Almila Su</span>
                    </div>
                    <h1 className="text-7xl font-bold leading-18 dark:text-[#AEBCCF]">{hero.title}</h1>
                    <p className="text-lg font-normal leading-7 text-gray-500 dark:text-white">{hero.text}</p>
                    <nav className="flex items-center gap-2.5">
                        <a href={hero?.list?.[0]?.url} className="button-hero py-3 px-8  ">{hero?.list?.[0]?.label}</a>
                        <a href={hero?.list?.[1]?.url} className="button-hero pt-3 pb-3 pl-3 pr-5 gap-2"><FaGithub className="text-2xl" /><span>{hero.list?.[1]?.label}</span></a>
                        <a href={hero?.list?.[2]?.url} className="button-hero pt-3 pb-3 pl-3 pr-5 gap-2"><FaLinkedin className="text-2xl" /><span>{hero?.list?.[2]?.label}</span></a>
                    </nav>
                </div>
                {/*Sağ Blok içerik*/}
                <div className="flex items-center justify-center max-w-118.75 max-md:max-w-full">
                    <img src="/hero.png" alt="Hero" className="rounded-3xl w-full aspect-[5/4] object-cover max-md:aspect-[2/1] max-phone:aspect-[4/3]" />
                </div>
            </section>
        </>
    )
}

export default Hero;