import styles from './Player.module.css'
import { ButtonPlayer } from '../ButtonPlayer'
import { useEffect, useRef, useState } from 'react'
import { ImVolumeHigh } from 'react-icons/im'


function getTiming(millis) {
    const minutes = Math.floor(millis / 60000);
    const seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}

export function Player({ track_url }) {

    const [currentSeconds, setCurrentSeconds] = useState(0)
    const [currentVolume, setCurrentVolume] = useState(0.5)
    const audioRef = useRef(null)
    const counterRef = useRef(null)
    const songTime = useRef(0)

    useEffect(() => {

        audioRef.current = new Audio(track_url)
        const audio = audioRef.current
        songTime.current = 0
        setCurrentSeconds(0)

        return () => {
            audio && audio.pause()
            clearInterval(counterRef.current)
        }

    }, [track_url])

    const handlePause = () => {
        if (track_url) {           
            audioRef.current.pause()
            clearInterval(counterRef.current)
        }
    }

    const handlePlay = () => {
        if (track_url) {
            audioRef.current.play()
            counterRef.current = setInterval(updateSongTime, 1000)
            audioRef.current.volume = currentVolume
        }
    }

    const handleModifyVolume = (e) => {
        setCurrentVolume(e.target.value)
        audioRef.current.volume = e.target.value
    }

    const updateSongTime = () => {
        songTime.current += 1000
        setCurrentSeconds(songTime.current)
    }

    const seconds = getTiming(currentSeconds)

    return (
        <div className={styles.player}>
            <section className={styles.infoSong}>
                <ButtonPlayer track={track_url} pause={handlePause} play={handlePlay} />
                <span className={styles.timer}>{seconds}</span>              
            </section>
            <div className={styles.volumeContainer}>
                <ImVolumeHigh size='1em' color='white' />
                <input type='range' value={currentVolume} min={0} max={1} step={0.01} className={styles.volume} onChange={handleModifyVolume} />
            </div>
        </div>
    )
}