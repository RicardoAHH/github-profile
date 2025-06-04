
export default function SearchBar() {
    return (
        <div className='w-[90%] h-[35px] bg-[#20293a] rounded-lg absolute top-3 left-[50%] -translate-x-1/2 flex items-center justify-center'>
            <form action="" className=" w-full pl-2 flex ">
                <img src="/public/search-svgrepo-com.svg" alt="search" className="w-4" />
                <input type="text" placeholder="username" className="text-white placeholder-white ml-2 text-sm mb-1 focus:outline-none" />
            </form>
        </div>
    )
}
