import axios from 'axios';
import { useState, useEffect} from 'react'
import api from '../services/api';


export function useFetch<T = unknown>(url: string) {

    const [datafull, setDataFull] = useState<T | null>(null)
    
    const [isFetching, setIsFetching] = useState(true)
    const [error, setError ] = useState<Error | null>(null)

    useEffect(() => {
        api.get(url)
        .then(response => {
            console.log(response.data['results'])
            setDataFull(response.data['results']);
            })
        .catch(err => {
            setError(err);
        })
        .finally(() => {
            setIsFetching(false);
        })
    }, [])

    return {datafull, isFetching, error}
}