import ObtainData from "./obtainData"
import { differenceInDays, parseISO } from 'date-fns';
import { useState } from "react";


export default function Repos({ search }) {
    const [reposToShow, setReposToShow] = useState(4);

    const { response, loading, error } = ObtainData(`https://api.github.com/users/${search}/repos`)
    if (loading) {
        return <div className="text-center p-4 text-lg text-white">Cargando perfil de GitHub...</div>;
    }

    // 2. Mostrar un mensaje de error si la petición falla
    if (error) {
        return <div className="text-center p-4 text-red-500 text-lg">Error al cargar el perfil: {error}</div>;
    }

    // 3. Si no hay 'loading' ni 'error', pero 'response' sigue siendo null (ej. 404 o API vacía)
    if (!response) {
        return <div className="text-center p-4 text-orange-500 text-lg">No se encontraron datos del perfil de GitHub.</div>;
    }
    const displayedRepos = response.slice(0, reposToShow);
    const hasMoreRepos = response.length > reposToShow;
    const handleViewAllClick = () => {
        setReposToShow(response.length); // Establece el estado para mostrar todos los repositorios
    };

    const today = new Date();
    console.log(response)
    function goRepo(url) {
        window.open(url, '_blank');
    }

    return (
        <>
            {displayedRepos.map((repo) => (
                <a key={repo.id} href={repo.html_url} target="blank" className="h-[150px] w-[90%] bg-linear-to-r from-[#121729] to-[#1c1b47] rounded-xl flex flex-col justify-center pl-5 gap-2">
                    <h2 className="text-white font-semibold text-[20px]">{repo.name}</h2>
                    <p className="text-[#97A3B6] text-sm">{repo.description}</p>
                    <div className="flex w-[100%] itmes-center justify-left gap-5">
                        <span className="flex items-center justify-center">
                            <img src="/Chield_alt.svg" alt="chield" />
                            <p className="text-[#97A3B6] font-semibold text-sm">{repo.license === null ? "" : repo.license.spdx_id}</p>
                        </span>
                        <span className="flex items-center justify-center">
                            <img src="/Nesting.svg" alt="Nesting" />
                            <p className="text-[#97A3B6] font-semibold text-sm">{repo.forks}</p>
                        </span>
                        <span className="flex items-center justify-center">
                            <img src="/Star.svg" alt="Star" />
                            <p className="text-[#97A3B6] font-semibold text-sm">{repo.stargazers_count}</p>
                        </span>
                        <p className="text-[#97A3B6] text-[10px] text-center pt-1">uptdated {differenceInDays(today, repo.updated_at)}  days ago</p>
                    </div>
                </a>

            ))
            }
            {hasMoreRepos && (
                <button
                    onClick={handleViewAllClick}
                    className="mt-2 mb-4 py-2 px-4 bg-[#20293a] hover:bg-blue-700 text-white font-semibold rounded-md transition duration-300 ease-in-out"
                >
                    View all repositories
                </button>
            )}
        </>
    )
}
