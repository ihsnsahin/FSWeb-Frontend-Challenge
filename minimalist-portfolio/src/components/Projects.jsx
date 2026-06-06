import { useContextData } from "../contexts/LanguageContext";
import ProjectCard from "./ProjectCard";
function Projects() {
    const { projects } = useContextData();
    return (
        <div className="flex flex-col gap-6 ">
            <h1 className="text-5xl leading-none font-semibold">{projects.title}</h1>
            <div className="flex justify-between gap-7">
                <ProjectCard />
            </div>
        </div>
    )
}

export default Projects;