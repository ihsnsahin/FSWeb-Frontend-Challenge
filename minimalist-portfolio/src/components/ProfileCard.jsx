import { useContextData } from "../contexts/LanguageContext";
function ProfileCard() {
    const { profiles } = useContextData();
    return (
        <>
            {profiles.profileList.map((item) => (
                <div className="flex  items-start gap-6" key={item.id}>
                    <span className="text-lg font-semibold w-36 shirnk-0 leading-[200%]">{item.key}</span>
                    <span className="max-w-1/2 leading-[200%]">{item.value}</span>
                </div>
            ))}
        </>
    )
}

export default ProfileCard;