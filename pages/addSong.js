import styles from '../styles/AddSong.module.css'
import { Searcher } from '../components/Searcher'
import { SearchResults } from '../components/SearchResults'
import { useEffect, useState } from 'react'
import Head from 'next/head'

export default function AddSong() {

    const [tracks, setTracks] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        fetch('/api/getRecommendedSongs')
            .then(res => res.json())
            .then(res => setTracks(res.tracks))
            .catch(err => setIsError(true))
            .finally(() => setIsLoading(false))
    }, [])

    const handleBusqueda = (search) => {
        if (search.length > 0) {
            setIsLoading(true)
            fetch(`/api/searchs/${search}`)
                .then(res => res.json())
                .then(res => setTracks(res.tracks.items))
                .catch(err => setIsError(true))
                .finally(() => setIsLoading(false))
        }
    }

    const addSong = (track_uri) => {
        fetch(`api/addSong/${track_uri}`)
            .then(res => res.json())
            .then(res => {
                if (res.snapshot_id) {
                    setTracks(tracks.filter(track => track.uri !== track_uri))
                }
            })
    }

    return (

        <div className={styles.addSong}>
            <Head>
                <title>Musico-T | Añadir canción</title>
                <meta property="og:title" content="Musico-T" key="title" />
            </Head>
            <Searcher onSearch={handleBusqueda} />
            <SearchResults isLoading={isLoading} isError={isError} tracks={tracks} addSong={addSong} />
        </div>
    )
}
