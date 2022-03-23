import styles from './Song.module.css'
import Image from 'next/image'
import { useSong } from '../../context/SongProvider'
import { FaSpotify } from 'react-icons/fa'

const getArtists = (artists) => {
    let totalArtists = ''
    artists.forEach(artist => {
        totalArtists += totalArtists.length > 0 ? `, ${artist.name}` : `${artist.name}`
    })

    return totalArtists
}

const getAuthorInfo = (author, date) => {
    const currentDate = new Date()
    const addedDate = new Date(date)

    const finalDate = currentDate - addedDate

    const timeName = finalDate < 60000 ? 'segundos' : 
                    finalDate >= 60000 && finalDate < 3600000 ? 'minutos' : 
                    finalDate >= 3600000 && finalDate < 86400000 ? 'horas' : 
                    finalDate >= 86400000 && finalDate < 31536000000 ? 'días' : 'años'

    let convertDate = 0

    switch(timeName) {
        case 'segundos': 
            convertDate = Math.floor(finalDate / 1000)
        break
        case 'minutos': 
            convertDate = Math.floor(finalDate / 60000)
        break 
        case 'horas': 
            convertDate = Math.floor(finalDate / 3600000)
        break 
        case 'días': 
            convertDate = Math.floor(finalDate / 86400000)
        break 
        default: 
            convertDate = Math.floor(finalDate / 31536000000)
    }

    return `Hace ${convertDate} ${timeName} por ${author}`
}

export function Song({track, date, author}) {

    const artists = getArtists(track.artists)
    const authorInfo = getAuthorInfo(author, date)

    const { setCurrentSong } = useSong()
    
    const handleClick = () => {
        setCurrentSong(track)
    }

    return (
        <div className={styles.song} onClick={handleClick}>
            <Image src={track?.album?.images?.[0]?.url ?? '/nosong.jpg'} width={40} height={40} className={styles.photo} alt='tst' />
            <div className={styles.information}>
                <span className={styles.title}>{track.name}</span>
                <span className={styles.artists}>{artists}</span>
                <span className={styles.user}>{authorInfo}</span>
            </div>
            <a href={track?.external_urls?.spotify} target='_blank' rel='noopener nofollow noreferrer'>
                <FaSpotify className={styles.icon} />
            </a>
        </div>
    )
}