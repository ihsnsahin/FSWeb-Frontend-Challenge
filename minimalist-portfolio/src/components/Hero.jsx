import { FaGithub, FaLinkedin } from "react-icons/fa";

function Hero() {
    return (
        <>
            <section className="flex items-center justify-between gap-[17]">
                {/*Sol Blok içerik*/}
                <div className="flex items-start flex-col gap-10 max-w-150">
                    <div className="flex items-center gap-3">
                        <span className="w-20 h-0.5 bg-indigo-700" />
                        <span className="text-xl font-medium leading-none text-indigo-700 " >Almila Su</span>
                    </div>
                    <h1 className="text-7xl font-bold leading-18">Creative thinker Minimalism lover</h1>
                    <p className="text-lg font-normal leading-7 text-gray-500">Hi, I’m Almila. I’m a full-stack developer. If you are looking for a Developer who to craft solid and scalable frontend products with great user experiences. Let’s shake hands with me.</p>
                    <nav className="flex items-center gap-2.5">
                        <a href="" className="button-hero py-3 px-8  ">Hire me</a>
                        <a href="" className="button-hero pt-3 pb-3 pl-3 pr-5 gap-2"><FaGithub className="text-2xl" /><span>Github</span></a>
                        <a href="" className="button-hero pt-3 pb-3 pl-3 pr-5 gap-2"><FaLinkedin className="text-2xl" /><span>Linkedin</span></a>
                    </nav>
                </div>
                {/*Sağ Blok içerik*/}
                <div className="flex items-center justify-center max-w-118.75">
                    <img src="/hero.png" alt="Hero" className="rounded-3xl w-full aspect-[5/4] object-cover" />
                </div>
            </section>
        </>
    )
}

export default Hero;