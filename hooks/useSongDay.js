import useSWRImmutable from "swr";


export function useSongDay({search, number}) {

    const { data, error } = useSWRImmutable(`/api/songs/s=${search};n=${number}`)

    return {
        song: data, 
        isLoading: !error && !data, 
        isError: error
    }
}