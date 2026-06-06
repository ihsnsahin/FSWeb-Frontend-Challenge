function Projects() {
    return (
        <div className="flex flex-col gap-6 ">
            <h1 className="text-5xl leading-none font-semibold">Projects</h1>
            <div className="flex justify-between gap-7">
                <div className="flex flex-col gap-6 max-w-64">
                    <div className="flex items-center justify-center ">
                        <img src="projects-1.png" alt="projects-1" className="w-full aspect-2/1 object-cover" />
                    </div>
                    <h2 className="text-3xl text-indigo-700">Workintech</h2>
                    <p className="text-xs text-gray-500">A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.</p>
                    <div className="flex items-center gap-2">
                        <span className="flex justify-center items-center py-1 px-4  border border-indigo-800  rounded-md  text-indigo-800 text-sm">react</span>
                        <span className="flex justify-center items-center py-1 px-4  border border-indigo-800  rounded-md  text-indigo-800 text-sm">redux</span>
                        <span className="flex justify-center items-center py-1 px-4  border border-indigo-800  rounded-md  text-indigo-800 text-sm">axios</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <a href="" className="text-indigo-800 text-base underline font-medium leading-none">Github</a>
                        <a href="" className="text-indigo-800 text-base underline font-medium leading-none">View All</a>
                    </div>
                </div>
                <div className="flex flex-col gap-6 max-w-64" >
                    <div className="flex items-center justify-center ">
                        <img src="projects-2.png" alt="projects-2" className="w-full aspect-2/1 object-cover" />
                    </div>
                    <h2 className="text-3xl text-indigo-700">Random Jokes</h2>
                    <p className="text-xs text-gray-500">A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.</p>
                    <div className="flex items-center gap-2">
                        <span className="flex justify-center items-center py-1 px-4  border border-indigo-800  rounded-md  text-indigo-800 text-sm">react</span>
                        <span className="flex justify-center items-center py-1 px-4  border border-indigo-800  rounded-md  text-indigo-800 text-sm">redux</span>
                        <span className="flex justify-center items-center py-1 px-4  border border-indigo-800  rounded-md  text-indigo-800 text-sm">axios</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <a href="" className="text-indigo-800 text-base underline font-medium leading-none">Github</a>
                        <a href="" className="text-indigo-800 text-base underline font-medium leading-none">View All</a>
                    </div>
                </div>

                <div className="flex flex-col gap-6 max-w-64">
                    <div className="flex items-center justify-center ">
                        <img src="projects-3.png" alt="projects-3" className="w-full aspect-2/1 object-cover" />
                    </div>
                    <h2 className="text-3xl text-indigo-700">Journey</h2>
                    <p className="text-xs text-gray-500">A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.</p>
                    <div className="flex items-center gap-2">
                        <span className="flex justify-center items-center py-1 px-4  border border-indigo-800  rounded-md  text-indigo-800 text-sm">react</span>
                        <span className="flex justify-center items-center py-1 px-4  border border-indigo-800  rounded-md  text-indigo-800 text-sm">redux</span>
                        <span className="flex justify-center items-center py-1 px-4  border border-indigo-800  rounded-md  text-indigo-800 text-sm">axios</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <a href="" className="text-indigo-800 text-base underline font-medium leading-none">Github</a>
                        <a href="" className="text-indigo-800 text-base underline font-medium leading-none">View All</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;