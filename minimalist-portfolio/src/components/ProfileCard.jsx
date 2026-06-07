import { useLanguage } from "../contexts/LanguageContext";
function ProfileCard() {
    const { contextData } = useLanguage();
    const { profiles } = contextData;
    return (
        <>
            {profiles.profileList.map((item) => (
                <div className="flex  items-start gap-6" key={item.id}>
                    <span className="text-lg font-semibold w-36 shrink-0 leading-[200%] dark:text-white">{item.key}</span>
                    <span className="max-w-1/2 leading-[200%] dark:text-white">{item.value}</span>
                </div>
            ))}
        </>
    )
}

export default ProfileCard;