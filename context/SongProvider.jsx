import { createContext, useContext, useState } from 'react'

const Context = createContext(undefined)

export const SongProvider = ({children}) => {

    const [currentSong, setCurrentSong] = useState(null)

    const value = {
        currentSong, 
        setCurrentSong
    }


    return <Context.Provider value={value}>{children}</Context.Provider>
}


export const useSong = () => {
    const { currentSong, setCurrentSong } = useContext(Context)
    return { currentSong, setCurrentSong }
}