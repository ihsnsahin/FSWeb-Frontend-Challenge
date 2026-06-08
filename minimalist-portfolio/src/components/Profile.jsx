
import { useLanguage } from "../contexts/LanguageContext";
import ProfileCard from "./ProfileCard";
function Profile() {
    const { contextData } = useLanguage();
    const { profiles } = contextData;
    return (
        <div className="flex flex-col gap-7 border-b border-[#BAB2E7] pb-10 " >
            <h1 className="text-5xl leading-none font-semibold dark:text-[#AEBCCF]">{profiles.title}</h1>
            <div className="flex justify-between gap-7 max-tablet:max-w-full max-tablet:flex-wrap max-phone:justify-center max-tablet:justify-start">
                <div className="flex flex-col gap-6">
                    <h2 className="text-3xl text-indigo-700 dark:text-[#CFCBFF]">{profiles.subtitle}</h2>
                    <ProfileCard />
                </div>
                <div className="flex flex-col gap-6" >
                    <h2 className="text-3xl text-indigo-700 dark:text-[#CFCBFF]">{profiles.aboutMe.title}</h2>
                    {profiles.aboutMe.text.map((item, index) => (
                        <p className="text-lg text-gray-500 max-w-4xl dark:text-white" key={index}>{item}</p>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Profile;