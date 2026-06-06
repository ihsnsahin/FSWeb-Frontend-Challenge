
import { useLanguage } from "../contexts/LanguageContext";
import ProfileCard from "./ProfileCard";
function Profile() {
    const { profiles } = useLanguage();
    return (
        <div className="flex flex-col gap-6 border-b border-[#BAB2E7] pb-10" >
            <h1 className="text-5xl leading-none font-semibold">{profiles.title}</h1>
            <div className="flex justify-between gap-7">
                <div className="flex flex-col gap-6">
                    <h2 className="text-3xl text-indigo-700">{profiles.subtitle}</h2>
                    <ProfileCard />
                </div>
                <div className="flex flex-col gap-6" >
                    <h2 className="text-3xl text-indigo-700">{profiles.aboutMe.title}</h2>
                    {profiles.aboutMe.text.map((item, index) => (
                        <p className="text-lg text-gray-500 max-w-3/4" key={index}>{item}</p>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Profile;