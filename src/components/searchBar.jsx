import { useState } from "react";
import axios from "axios";

export default function SearchBar({ setSearch }) {
    const [inputValue, setInputValue] = useState('')
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false)

    const handleInputChange = async (e) => {
        setInputValue(e.target.value);
        if (e.target.value.length === 0) {
            setSuggestions([]);
            setShowSuggestions(false);
            return;
        }
        try {
            const response = await axios.get(`https://api.github.com/users`);
            console.log(response)
            const data = response.data;
            // Example: filter usernames that match inputValue
            const filtered = data
                .map(user => user.login)
                .filter(login => login.toLowerCase().startsWith(e.target.value.toLowerCase()));
            if (filtered.length) {
                setSuggestions(filtered);
                setShowSuggestions(true);
            } else {
                setSuggestions([]);
                setShowSuggestions(false);
            }
        } catch (error) {
            console.error("Error al cargar sugerencias", error);
            setSuggestions([]);
            setShowSuggestions(false);
        }
    };


    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim() !== '') {
            setSearch(inputValue.trim());
        }

        setInputValue('');
    };

    function handleSuggestionClick(item) {
        setInputValue(item); // Pone la sugerencia seleccionada en el input
        setSearch(item);      // Dispara la búsqueda con la sugerencia
        setInputValue("")
        setShowSuggestions(false);
    }

    return (
        <>
            <div className='w-[340px] md:w-[400px] xl:w-[450px] h-[40px] bg-[#20293a] rounded-lg absolute top-3 left-[50%] -translate-x-1/2 flex items-center justify-center'>
                <form onSubmit={handleSubmit} className=" w-full pl-2 flex ">
                    <img src="/Search.svg" alt="search" className="w-4" />
                    <input type="text" onChange={handleInputChange} value={inputValue} placeholder="username" className="text-white placeholder-white ml-2 text-sm mb-1 focus:outline-none w-full h-full" />
                </form>
            </div>
            <div className='overflow-hidden absolute z-10 top-12 left-[50%] -translate-x-1/2 border-white w-[80%] '>
                {showSuggestions && suggestions.length > 0 && (
                    <ul className="text-white w-full bg-[#111629] border-black rounded-md  shadow-md">
                        {suggestions.map((item, index) => (
                            <li
                                key={index}
                                className="px-4 py-2 cursor-pointer hover:bg-[#8fc636]"
                                onClick={() => handleSuggestionClick(item)}
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                )}

            </div>

        </>
    )
}
