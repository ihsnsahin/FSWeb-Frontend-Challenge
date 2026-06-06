import { useLanguage } from "../contexts/LanguageContext";
import SkillCard from "./SkillCard";
function Skills() {
    const { contextData } = useLanguage();
    const { skills } = contextData;
    return (
        <div className="flex flex-col gap-6 border-b border-[#BAB2E7] pb-10">
            <h1 className="text-5xl leading-none font-semibold">{skills.title}</h1>
            <div className="flex justify-between gap-7">
                <SkillCard />
            </div>
        </div>
    )
}

export default Skills;
