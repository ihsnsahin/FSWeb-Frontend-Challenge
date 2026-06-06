function Profile() {
    return (
        <div className="flex flex-col gap-6 border-b border-[#BAB2E7] pb-10">
            <h1 className="text-5xl leading-none font-semibold">Profile</h1>
            <div className="flex justify-between gap-7">
                <div className="flex flex-col gap-6">
                    <h2 className="text-3xl text-indigo-700">Profile</h2>
                    <div className="flex  items-start gap-6">
                        <span className="text-lg font-semibold w-36 shirnk-0 leading-[200%]">Doğum Tarihi</span>
                        <span className="max-w-1/2 leading-[200%]">24.03.1996</span>
                    </div>
                    <div className="flex items-start gap-6">
                        <span className="text-lg font-semibold w-36 shirnk-0 leading-[200%]">Şehri</span>
                        <span className="max-w-1/2 leading-[200%]">Ankara</span>
                    </div>
                    <div className="flex items-start gap-6">
                        <span className="text-lg font-semibold w-36 shirnk-0 leading-[200%]">Eğitim Durumu</span>
                        <span className="max-w-1/2 leading-[200%]">Hacettepe Ünv.  Biyoloji
                            Lisans, 2016</span>
                    </div>
                    <div className="flex items-start gap-6">
                        <span className="text-lg font-semibold w-36 shirnk-0 leading-[200%]">Tercih Ettiği Rol</span>
                        <span className="max-w-1/2 leading-[200%]">Frontend, UI</span>
                    </div>
                </div>
                <div className="flex flex-col gap-6" >
                    <h2 className="text-3xl text-indigo-700">About Me</h2>
                    <p className="text-lg text-gray-500 max-w-3/4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.</p>
                    <p className="text-lg text-gray-500 max-w-3/4">Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam! </p>
                </div>
            </div>
        </div>
    )
}

export default Profile;