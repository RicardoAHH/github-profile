import { useEffect, useState } from 'react'
import axios from 'axios';

export default function ObtainData(url) {
    // 1. declaracion de estados(hooks)
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [response, setResponse] = useState(null)

    async function getData() {
        try {
            setLoading(true)
            const { data } = await axios.get(url)
            setResponse(data)
        } catch (error) {
            setError(error.message)
        } finally {
            setLoading(false)
        }
    }

    //2. Hace un fetch o request de la data
    useEffect(() => {
        getData()
        //Cuando una de las dependencias cambia su valor , la funcion del useEffect se vuelve a ejecutar con el v alor actualizado
    }, [url]);

    // retorna los estados
    return {
        loading,
        error,
        response
    }
}
