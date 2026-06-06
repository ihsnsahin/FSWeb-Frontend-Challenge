import { useContextData } from "../contexts/LanguageContext";
function SkillCard() {
    const { skills } = useContextData();
    return (
        <>
            {skills.list.map((item) => (
                <div className="flex flex-col gap-6" key={item.id}>
                    <h2 className="text-3xl text-indigo-700">{item.name}</h2>
                    <p className="text-xs text-gray-500 max-w-3/4">{item.description}</p>
                </div>
            ))}
        </>
    )
}

export default SkillCard;