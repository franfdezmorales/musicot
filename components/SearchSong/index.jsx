import styles from './SearchSong.module.css'
import Image from 'next/image'
import { IoMdAdd } from 'react-icons/io'
import { FaSpotify } from 'react-icons/fa'

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
            <Image src={track?.album?.images?.[0]?.url ?? '/nosong.jpg'} width={40} height={40} className={styles.photo} alt='tst' />
            <div className={styles.information}>
                <span className={styles.title}>{track.name}</span>
                <span className={styles.artists}>{artists}</span>
                <span className={styles.titleMobile}>{track.name.length > 20 ? `${track.name.substring(0, 20)}...` : track.name}</span>
                <span className={styles.artistsMobile}>{artists.length > 20 ? `${artists.substring(0, 20)}...` : artists}</span>
            </div>
            <span className={styles.addButon} onClick={handleAddSong}>
                <IoMdAdd color='white' size='1em' />
            </span>
            <a href={track?.external_urls?.spotify} target='_blank' rel='noopener nofollow noreferrer'>
                <FaSpotify className={styles.icon} />
            </a>
        </div>
    )

}