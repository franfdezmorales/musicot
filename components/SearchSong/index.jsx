import styles from './SearchSong.module.css'
import Image from 'next/image'
import { IoMdAdd } from 'react-icons/io'

const getArtists = (artists) => {
    let totalArtists = ''
    artists.forEach(artist => {
        totalArtists += totalArtists.length > 0 ? `, ${artist.name}` : `${artist.name}`
    })

    return totalArtists
}

export function SearchSong({track, onAddSong}) {

    const artists = getArtists(track.artists)

    const handleAddSong = () => {
        onAddSong(track.uri)
    }

    return (
        <div className={styles.song}>
            <Image src={track?.album?.images?.[0]?.url} width={40} height={40} className={styles.photo} alt='tst' />
            <div className={styles.information}>
                <span className={styles.title}>{track.name}</span>
                <span className={styles.artists}>{artists}</span>
            </div>
            <span className={styles.addButon} onClick={handleAddSong}>
                <IoMdAdd color='white' size='1em' />
            </span>
        </div>
    )

}