function Footer() {
    return (
        <div className="bg-[#F9F9F9] mt-33">
            <div className="flex flex-col max-w-6xl mx-auto gap-22 pt-21 pb-32">
                <h2 className="text-[42px] font-semibold text-[#1F2937] max-w-lg "> Let’s work together on your next product.</h2>
                <div className="flex justify-between">
                    <div className="text-xl font-medium">
                        <span> 👉 </span>
                        <a href="mailto:almilasucode@gmail.com" className=" text-[#AF0C48] underline">
                            almilasucode@gmail.com
                        </a></div>

                    <nav>
                        <ul className="flex gap-6 text-lg font-medium">
                            <li><a href="#" target="_blank" rel="noreferrer" className="text-[#0A0A14]">Personal Blog</a></li>
                            <li><a href="#" target="_blank" rel="noreferrer" className="text-[#00AB6B]">Github</a></li>
                            <li><a href="#" target="_blank" rel="noreferrer" className="text-[#0077B5]">Linkedin</a></li>
                        </ul>
                    </nav>

                </div>
            </div>


        </div>
    )
}

export default Footer;