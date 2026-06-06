import { useLanguage } from "../contexts/LanguageContext";
function ProjectCard() {
    const { contextData } = useLanguage();
    const { projects } = contextData;
    return (<>
        {projects.list.map((item) => (
            <div className="flex flex-col gap-6 max-w-64" key={item.id}>
                <div className="flex items-center justify-center ">
                    <img src={item.image} alt="projects-1" className="w-full aspect-2/1 object-cover" />
                </div>
                <h2 className="text-3xl text-indigo-700">{item.name}</h2>
                <p className="text-xs text-gray-500">{item.description}</p>
                <div className="flex items-center gap-1">
                    {item.technologies.map((technology, index) => (
                        <span key={index} className="flex justify-center items-center py-1 px-4  border border-indigo-800  rounded-md  text-indigo-800 text-sm">{technology}</span>
                    ))}
                </div>
                <div className="flex justify-between items-center">
                    {item.linkList.map((link, index) => (
                        <a href="" key={index} className="text-indigo-800 text-base underline font-medium leading-none">{link}</a>
                    ))}
                </div>
            </div>

        ))}

    </>)
}
export default ProjectCard;