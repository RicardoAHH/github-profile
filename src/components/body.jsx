import SearchBar from "./searchBar";



export default function Body({ children }) {
    return (
        <div className='w-full h-svh bg-[#20293a] relative'>
            <SearchBar />
            <div className="w-screen h-[150px] overflow-hidden">
                <img src="/purple-space-background_969965-24448.avif" alt="space" className="" />
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
