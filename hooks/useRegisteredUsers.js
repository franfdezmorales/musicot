import useSWR from "swr";



export function useRegisteredUsers() {
    const { data, error } = useSWR('/api/getRegisteredUsers')

    return {
        users: data, 
        isLoading: !error && !data, 
        isError: error
    }
}