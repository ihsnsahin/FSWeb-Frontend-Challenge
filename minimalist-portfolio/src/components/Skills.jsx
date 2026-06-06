function Skills() {
    return (
        <div className="flex flex-col gap-6 border-b border-[#BAB2E7] pb-10">
            <h1 className="text-5xl leading-none font-semibold">Skills</h1>
            <div className="flex justify-between gap-7">
                <div className="flex flex-col gap-6">
                    <h2 className="text-3xl text-indigo-700">Java Script</h2>
                    <p className="text-xs text-gray-500 max-w-3/4">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className="flex flex-col gap-6" >
                    <h2 className="text-3xl text-indigo-700">React.Js</h2>
                    <p className="text-xs text-gray-500 max-w-3/4">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className="flex flex-col gap-6">
                    <h2 className="text-3xl text-indigo-700">Node.Js</h2>
                    <p className="text-xs text-gray-500 max-w-3/4">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
        </div>
    )
}

export default Skills;
