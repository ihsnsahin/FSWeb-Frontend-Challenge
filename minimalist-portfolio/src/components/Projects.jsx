import { useLanguage } from "../contexts/LanguageContext";
import ProjectCard from "./ProjectCard";
function Projects() {
    const { contextData } = useLanguage();
    const { projects } = contextData;
    return (
        <div id="projects" className="flex flex-col gap-6 pb-33">
            <h1 className="text-5xl leading-none font-semibold dark:text-[#AEBCCF]">{projects.title}</h1>
            <div className="flex flex-wrap justify-between gap-7 max-tablet:flex-wrap max-tablet:justify-center">
                <ProjectCard />
            </div>
        </div>
    )
}

export default Projects;