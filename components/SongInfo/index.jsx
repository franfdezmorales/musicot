import styles from './SongInfo.module.css'
import { useSong } from '../../context/SongProvider'
import { Player } from '../Player'
import Image from 'next/image'


const getArtists = (artists) => {
    let totalArtists = ''

    if (artists) {
        artists.forEach(artist => {
            totalArtists += totalArtists.length > 0 ? `, ${artist.name}` : `${artist.name}`
        })
    }

    return totalArtists
}

export function SongInfo() {

    const { currentSong } = useSong()

    const artists = getArtists(currentSong?.artists)

    return (
        <div className={styles.player}>
            <section className={styles.info}>
                <Image src={currentSong?.album?.images?.[0]?.url ?? `/nosong.jpg`} alt='Song Image' width={125} height={125} className={styles.photo} />
                <div className={styles.songInfo}>
                    <span className={styles.title}>{currentSong?.name ?? `Ninguna canción seleccionada`}</span>
                    {<span className={styles.author}>{artists.length > 0 ? artists : `Sin autor/a`}</span>}
                </div>
            </section>
            <Player track_url={currentSong?.preview_url}/>
        </div>
    )
}