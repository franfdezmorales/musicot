import useSWR from "swr";



export function useProfiles() {
    const { data, error } = useSWR('/api/getUserProfiles')

    return {
        profiles: data, 
        isLoading: !error && !data, 
        isError: error
    }
}