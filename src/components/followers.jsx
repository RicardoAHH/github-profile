import ObtainData from "./obtainData";

export default function Followers({ search }) {

    const { response, loading, error } = ObtainData(`https://api.github.com/users/${search}`)
    if (loading) {
        return <div className="text-center p-4 text-lg text-white">Cargando perfil de GitHub...</div>;
    }

    if (error) {
        return <div className="text-center p-4 text-red-500 text-lg">Error al cargar el perfil: {error}</div>;
    }

    if (!response) {
        return <div className="text-center p-4 text-orange-500 text-lg">No se encontraron datos del perfil de GitHub.</div>;
    }


    return (
        <div className='flex flex-wrap mt-25 ml-5 gap-5'>
            <div className='h-[40px] w-fit rounded-lg bg-[#111629] flex items-center justify-center '>
                <div className='h-[30px] bg-[#111629] border-r-1 border-white flex items-center justify-center'>
                    <p className='text-white text-sm p-4 text-center'>Followers</p>
                </div>
                <div className='h-[30px] bg-[#111629] flex items-center justify-center'>
                    <p className='text-white text-sm p-4 text-center'>{response.followers}</p>
                </div>
            </div>
            <div className='h-[40px] w-fit rounded-lg bg-[#111629] flex items-center justify-center '>
                <div className='h-[30px] bg-[#111629] border-r-1 border-white flex items-center justify-center'>
                    <p className='text-white text-sm p-4 text-center'>Following</p>
                </div>
                <div className='h-[30px] bg-[#111629] flex items-center justify-center'>
                    <p className='text-white text-sm p-4 text-center'>{response.following}</p>
                </div>
            </div>
            <div className='h-[40px] w-fit rounded-lg bg-[#111629] flex items-center justify-center '>
                <div className='h-[30px] bg-[#111629] border-r-1 border-white flex items-center justify-center'>
                    <p className='text-white text-sm p-4 text-center'>Location</p>
                </div>
                <div className='h-[30px] bg-[#111629] flex items-center justify-center'>
                    <p className='text-white text-sm p-4 text-center'>{response.location}</p>
                </div>
            </div>
        </div>
    )
}



