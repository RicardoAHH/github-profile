import SearchBar from "./searchBar";

export default function Body({ children }) {

    return (
        <div className='w-full h-full bg-[#20293a] relative'>

            <div className="w-full h-[150px] overflow-hidden ">
                <img src="/public/hero-image-github-profile.jpg" alt="space" className="w-[100%] h-[100%] object-cover" />
            </div>
            <div className='bg-[#20293a] w-[100px] h-[100px] rounded-xl absolute top-[113px] left-5 flex items-center justify-center'>
                <div className="bg-black w-[90%] h-[90%] rounded-xl flex items-center justify-center">
                    <img src="/github-white-icon.svg" alt="github" className="w-[95%]" />
                </div>
            </div>
            {children}

        </div>
    )
}
