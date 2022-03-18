import useSWR from "swr";



export function useSongsFromPlaylist() {
    const { data, error } = useSWR('/api/getSongsFromPlaylist')

    return {
        songs: data?.items, 
        isLoading: !error && !data, 
        isError: error
    }
}