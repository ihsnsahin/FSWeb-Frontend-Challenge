function Header() {
    return (
        <>
            <div className="flex justify-between">
                <span className="w-14 h-14 text-logo-600 bg-[#EEEBFF] rounded-full flex items-center justify-center font-bold text-2xl rotate-40">A</span>
                <nav className="flex items-center">
                    <a href="" className="button-header">Skills</a>
                    <a href="" className="button-header">Projects</a>
                    <a href="" className="button-header">Hire Me</a>
                </nav>
            </div>
        </>
    )
}

export default Header;