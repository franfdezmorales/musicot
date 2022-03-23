import styles from '../styles/SongDay.module.css'
import { DaySong } from '../components/DaySong'
import { useSongDay } from '../hooks/useSongDay'
import { SongStats } from '../components/SongStats'
import { Spinner } from '../components/Spinner'
import { Error } from '../components/Error'
import Head from 'next/head'

const getEmbedData = (uri) => {
    const splittedData = uri.split(':')
    
    return { type: splittedData[1], id: splittedData[2] }
}

export default function SongDay({search, number}) {

    const { song, isLoading, isError } = useSongDay({search, number})


    if (isLoading) return <div className={styles.loading}><Spinner /></div>
    if (!song?.song || isError) return <div className={styles.loading}><Error /></div>

    const { type, id } =  getEmbedData(song.song.uri)

    return (
        <div className={styles.songday}>
            <Head>
                <title>Musico-T | Canción recomendada</title>
                <meta property="og:title" content="Musico-T" key="title" />
            </Head>
            <section className={styles.info}>
                <DaySong track={song.song} />
                <SongStats stats={song.songData} />
            </section>
            <section className={styles.player}>
                <iframe src={`https://open.spotify.com/embed/${type}/${id}`} width="500" height="80" frameBorder="0" allowtransparency="true" allow="encrypted-media" />
            </section>
            <section className={styles.playerMobile}>
                <iframe src={`https://open.spotify.com/embed/${type}/${id}`} width="300" height="80" frameBorder="0" allowtransparency="true" allow="encrypted-media" />
            </section>
        </div>
    )
}



export async function getStaticProps() {
    const characters = 'abcdefghijklmnopqrstuvwxyz'
    const randomSearch = characters.charAt(Math.floor(Math.random() * characters.length))
    const randomNumber = Math.floor(Math.random() * 50)

    return {
        props: {
            search: randomSearch, 
            number: randomNumber
        }, 
        revalidate: 86400
    }

}


