import styles from './DaySong.module.css'
import Image from 'next/image'
import { Player } from '../Player'

const getArtists = (artists) => {
    let totalArtists = ''

    if (artists) {
        artists.forEach(artist => {
            totalArtists += totalArtists.length > 0 ? `, ${artist.name}` : `${artist.name}`
        })
    }

    return totalArtists
}

export function DaySong({ track }) {

    const artists = getArtists(track?.artists)

    return (
        <div className={styles.daySong}>
            <Image src={track?.album?.images?.[0]?.url} alt='Song Image' width={175} height={175} className={styles.photo} />
            <div className={styles.songInfo}>
                <span className={styles.title}>{track?.name}</span>
                {<span className={styles.author}>{artists}</span>}
            </div>
        </div>
    )
}