import { useState } from "react";
export default function SearchBar({ setSearch }) {
    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
        console.log(inputValue)
    };


    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim() !== '') {
            setSearch(inputValue.trim()); // Pasa el valor del input al componente padre
        }

        setInputValue('');
    };

    // const handleSearch = (e) => {
    //     e.preventDefault()
    //     const newValue = e.target.value
    //     setSearch(newValue)

    // }

    // function handleSubmit(e) {
    //     e.preventDefault()
    //     setUser(search)

    // }

    return (
        <div className='w-[90%] h-[35px] bg-[#20293a] rounded-lg absolute top-3 left-[50%] -translate-x-1/2 flex items-center justify-center'>
            <form onSubmit={handleSubmit} className=" w-full pl-2 flex ">
                <img src="/Search.svg" alt="search" className="w-4" />
                <input type="text" onChange={handleInputChange} value={inputValue} placeholder="username" className="text-white placeholder-white ml-2 text-sm mb-1 focus:outline-none" />
            </form>
        </div>
    )
}
